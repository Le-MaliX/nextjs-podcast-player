import { PropTypes } from 'prop-types';
import Link from 'next/link';
import moment from 'moment';

const ChannelClip = ({
  clip: {
    // eslint-disable-next-line camelcase
    id, title, duration, updated_at,
  },
}) => {
  const now = moment(updated_at);
  return (
    <>
      <Link href="/podcast/[id]" as={`/podcast/${id}`}>
        <span className="podcast">
          <h3>{title}</h3>
          <div className="meta">
            {now.fromNow()}
            {' | '}
            {Math.ceil(duration / 60)}
            {' '}
            minutes
          </div>
        </span>
      </Link>

      {/* Styles */}
      <style jsx>
        {`
        .podcast {
            display: block;
            color: #FFF;
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
            color: #CCC;
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
          h3 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>

    </>
  );
};

ChannelClip.propTypes = {
  clip: PropTypes.object.isRequired,
};

export default ChannelClip;
