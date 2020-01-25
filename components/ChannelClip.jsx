import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

const ChannelClip = ({
  clip: {
    id, title, duration,
  },
}) => (
  <>
    <Link href={`/podcast?id=${id}`}>
      <span className="podcast">
        <h3>{title}</h3>
        <div className="meta">
          {Math.ceil(duration / 60)}
          {' '}
          minutes
        </div>
      </span>
    </Link>

    <style jsx>
      {`
      .podcast {
          display: block;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
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

ChannelClip.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  clip: PropTypes.object.isRequired,
};

export default ChannelClip;
