/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import ChannelBanner from '../components/ChannelBanner';
import ChannelMini from '../components/ChannelMini';
import ChannelClip from '../components/ChannelClip';

class Channel extends Component {
  static async getInitialProps({ query: { id } }) {
    try {
      const [reqChannel, reqAudios, reqChilds] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${id}`),
        fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
      ]);
      const {
        body: { channel: { title, urls: { banner_image: { original } } } },
      } = await reqChannel.json();
      const { body: { audio_clips } } = await reqAudios.json();
      const { body: { channels } } = await reqChilds.json();
      return {
        title, original, audio_clips, channels,
      };
    } catch ({ message }) {
      return (message);
    }
  }

  render() {
    const {
      title,
      original,
      audio_clips,
      channels,
      // eslint-disable-next-line react/prop-types
      message,
    } = this.props;
    if (message) return <h1>{message}</h1>;
    return (
      <>
        <Header />
        <ChannelBanner url={original} title={title} />

        {channels.length > 0
          && (
            <div>
              <h2>Series</h2>
              <div className="channels">
                {channels.map((channel) => (
                  <ChannelMini
                    key={channel.id}
                    channel={channel}
                  />
                ))}
              </div>
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
            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
          `}
        </style>
      </>
    );
  }
}

Channel.propTypes = {
  title: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  audio_clips: PropTypes.array.isRequired,
  channels: PropTypes.array,
};

Channel.defaultProps = {
  channels: [],
};

export default Channel;
