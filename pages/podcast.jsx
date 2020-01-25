/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import NavBack from '../components/NavBack';
import PodcastPicture from '../components/PodcastPicture';
import AudioPlayer from '../components/AudioPlayer';

class Podcast extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
    const { body: { audio_clip } } = await fetchClip.json();
    return { audio_clip };
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
              background: #222;
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
  // eslint-disable-next-line react/forbid-prop-types
  audio_clip: PropTypes.object.isRequired,
};

export default Podcast;
