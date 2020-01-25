import React from 'react';
import { PropTypes } from 'prop-types';

const Channel = ({
  channel: {
    title,
    urls: {
      logo_image: { original },
    },
  },
}) => (
  <>
    <a href="#!" className="channel">
      <img src={original} alt="" />
      <h2>{title}</h2>
    </a>

    {/* Styles */}
    <style jsx>
      {`
      a.channel {
        display: block;
        margin-bottom: 0.5em;
        color: #333;
        text-decoration: none;
      }
      .channel img {
        border-radius: 3px;
        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
        width: 100%;
      }
      h2 {
        padding: 5px;
        font-size: 0.9em;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }
    `}
    </style>
  </>
);

Channel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  channel: PropTypes.object.isRequired,
};

export default Channel;
