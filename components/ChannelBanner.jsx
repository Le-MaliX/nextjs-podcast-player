import { PropTypes } from 'prop-types';

const ChannelBanner = ({ url, title, description }) => (
  <>
    <div
      className="banner"
    />
    <h1>{title}</h1>
    <p>{ description }</p>
    {/* Styles */}
    <style jsx>
      {`
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
          background-image: url(${url});
        }        
        h1 {
          font-weight: 600;
          padding: 0px 15px;
        }
        p {
          padding: 0px 15px;
          text-align: justify;
        }
      `}
    </style>

  </>
);

ChannelBanner.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ChannelBanner;
