import { PropTypes } from 'prop-types';
import ChannelMini from './ChannelMini';

const ChannelGrid = ({ channels }) => (
  <>
    <div className="channels">
      {channels.map((channel) => <ChannelMini key={channel.id} channel={channel} />)}
    </div>

    {/* Styles */ }
    <style jsx>
      {`
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

ChannelGrid.propTypes = {
  channels: PropTypes.array.isRequired,
};

export default ChannelGrid;
