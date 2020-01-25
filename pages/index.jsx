import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'isomorphic-fetch';
import Header from '../components/Header';
import ChannelMini from '../components/ChannelMini';

class Index extends Component {
  static async getInitialProps() {
    try {
      const req = await fetch('https://api.audioboom.com/channels/recommended');
      const { body: channels } = await req.json();
      return { channels };
    } catch ({ message }) {
      return (message);
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { channels, message } = this.props;
    if (message) return <h1>{message}</h1>;
    return (
      <>
        <Header />
        <div className="channels">
          {channels.map((channel) => <ChannelMini key={channel.id} channel={channel} />)}
        </div>

        {/* Styles */}
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
  }
}

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  channels: PropTypes.array.isRequired,
};

export default Index;
