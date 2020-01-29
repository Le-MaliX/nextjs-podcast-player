import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Error from 'next/error';
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

class Index extends Component {
  static async getInitialProps({ res }) {
    try {
      const req = await fetch('https://api.audioboom.com/channels/recommended');
      const { body: channels } = await req.json();
      return { channels, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return ({ channels: [], statusCode: 503 });
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { channels, statusCode } = this.props;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }
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
