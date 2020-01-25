import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'isomorphic-fetch';
import ChannelMini from '../components/ChannelMini';

class Index extends Component {
  static async getInitialProps() {
    const req = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await req.json();
    return { channels };
  }

  render() {
    const { channels } = this.props;
    return (
      <>
        <header>Podcast</header>
        <div className="channels">
          {channels.map((channel) => <ChannelMini key={channel.id} channel={channel} />)}
        </div>

        {/* Styles */}
        <style jsx>
          {`
      header {
        color: #FFF;
        background: #8756ca;
        padding: 15px;
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
        <style jsx global>
          {`
      body {
        margin: 0;
        font-family: system-ui;
        backgorund: #EEE;
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
