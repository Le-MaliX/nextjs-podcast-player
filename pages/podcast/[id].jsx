/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import NavBack from '../../components/NavBack';
import PodcastPicture from '../../components/PodcastPicture';
import AudioPlayer from '../../components/AudioPlayer';

class Podcast extends React.Component {
  static async getInitialProps({ query: { id } }, res) {
    try {
      const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
      const { body: { audio_clip } } = await fetchClip.json();
      return { audio_clip };
    } catch (e) {
      res.statusCode = 503;
      return ({ channels: [], statusCode: 503 });
    }
  }

  render() {
    const { audio_clip } = this.props;

    return (
      <>
        <div className="modal">
          <div className="clip">
            <NavBack id={audio_clip.channel.id} />

            <PodcastPicture
              image={audio_clip.urls.image || audio_clip.channel.urls.logo_image.original}
            />

            <AudioPlayer
              clipTitle={audio_clip.title}
              channelTitle={audio_clip.channel.title}
              mp3={audio_clip.urls.high_mp3}
            />
          </div>
        </div>

        <style jsx>
          {`
            .clip {
              display: flex;
              height: 100%;
              flex-direction: column;
              background: #591F82;
              color: white;
            }
            .modal {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 99999;
            }
          `}
        </style>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            body {
              margin: 0;
              font-family: 'Open Sans', sans-serif;
              background: #EEE;
            }
          `}
        </style>
      </>
    );
  }
}

Podcast.propTypes = {
  audio_clip: PropTypes.object.isRequired,
};

export default Podcast;
