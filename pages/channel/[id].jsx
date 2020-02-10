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
  } = props;
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title={`${title}`}>
      <ChannelBanner url={urls.banner_image.original || urls.logo_image.original} title={title} />

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
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
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
        channels: [], audio_clips: [], title: '', urls: {}, statusCode: res.statusCode,
      };
    }

    const {
      body: { channel: { title, urls } },
    } = await reqChannel.json();
    const { body: { audio_clips } } = await reqAudios.json();
    const { body: { channels } } = await reqChilds.json();

    return {
      title, urls, audio_clips, channels, statusCode: 200,
    };
  } catch (e) {
    return ({
      channels: [], audio_clips: [], title: '', urls: {}, statusCode: 503,
    });
  }
};

export default Channel;
