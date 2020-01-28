import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

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
      <Layout title="Podcasts">
        <ChannelGrid channels={channels} />
      </Layout>
    );
  }
}

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  channels: PropTypes.array.isRequired,
};

export default Index;
