/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import Error from 'next/error';
import Layout from '../../components/Layout';
import ChannelBanner from '../../components/ChannelBanner';
import ChannelClip from '../../components/ChannelClip';
import ChannelGrid from '../../components/ChannelGrid';

const Channel = (props) => {
  const {
    title,
    urls,
    audio_clips,
    channels,
    statusCode,
    description,
  } = props;
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title={`${title}`}>
      <ChannelBanner
        url={urls.banner_image.original || urls.logo_image.original}
        title={title}
        description={description}
      />

      {channels.length > 0
        && (
          <div>
            <h2>Series</h2>
            <ChannelGrid channels={channels} />
          </div>
        )}

      <h2>Ultimos Podcasts</h2>
      {audio_clips.map((clip) => (
        <ChannelClip
          key={clip.id}
          clip={clip}
        />
      ))}

      <style jsx>
        {`
            h2 {
              font-family: 'Ubuntu', sans-serif;
              padding: 5px 15px;
              font-size: 1.5em;
              font-weight: 600;
              margin: 0;
              text-align: center;
              color: #F9B200;
            }
          `}
      </style>
    </Layout>
  );
};

Channel.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
  audio_clips: PropTypes.array.isRequired,
  channels: PropTypes.array.isRequired,
  statusCode: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};


Channel.getInitialProps = async ({ query: { id }, res }) => {
  try {
    const [reqChannel, reqAudios, reqChilds] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${id}`),
      fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
    ]);

    if (
      reqChannel.status >= 400
      || reqAudios.status >= 400
      || reqChilds.status >= 400
    ) {
      res.statusCode = Math.max(reqChannel.status, reqAudios.status, reqChilds.status);
      return {
        channels: [], audio_clips: [], title: '', urls: {}, description: '', statusCode: res.statusCode,
      };
    }

    const {
      body: { channel: { title, urls, description } },
    } = await reqChannel.json();
    const { body: { audio_clips } } = await reqAudios.json();
    const { body: { channels } } = await reqChilds.json();

    return {
      title, urls, description, audio_clips, channels, statusCode: 200,
    };
  } catch (e) {
    return ({
      channels: [], audio_clips: [], title: '', urls: {}, description: '', statusCode: 503,
    });
  }
};

export default Channel;
