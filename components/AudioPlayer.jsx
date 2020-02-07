import { PropTypes } from 'prop-types';

const AudioPlayer = ({ clipTitle, channelTitle, mp3 }) => (
  <>
    <div className="player">
      <h3>{ clipTitle }</h3>
      <h6>{ channelTitle }</h6>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio controls autoPlay>
        <source src={mp3} type="audio/mpeg" />
      </audio>
    </div>

    {/* Styles */}
    <style jsx>
      {`
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }
      `}
    </style>
  </>
);

AudioPlayer.propTypes = {
  clipTitle: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired,
};

export default AudioPlayer;
