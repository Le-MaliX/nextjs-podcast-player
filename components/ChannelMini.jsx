import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

const ChannelMini = ({
  channel: {
    id, title, urls: {
      logo_image: { original },
    },
  },
}) => (
  <>
    <Link href={`/channel?id=${id}`}>
      <span className="channel">
        <img src={original} alt="" />
        <h2>{title}</h2>
      </span>
    </Link>

    {/* Styles */}
    <style jsx>
      {`
      span.channel {
        display: block;
        margin-bottom: 0.5em;
        color: #333;
        cursor: pointer;
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

ChannelMini.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  channel: PropTypes.object.isRequired,
};

export default ChannelMini;
