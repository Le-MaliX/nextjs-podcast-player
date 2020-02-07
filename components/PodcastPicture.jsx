import { PropTypes } from 'prop-types';

const PodcastPicture = ({ image }) => (
  <>
    <picture>
      <div />
    </picture>

    {/* Styles */}
    <style jsx>
      {`
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url(${image})
        }
      `}
    </style>
  </>
);

PodcastPicture.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PodcastPicture;
