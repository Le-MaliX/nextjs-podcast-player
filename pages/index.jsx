/* eslint-disable no-console */
import { PropTypes } from 'prop-types';
import 'isomorphic-fetch';
import Error from './_error';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

const Index = ({ channels, statusCode }) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="Podcasts">
      <ChannelGrid channels={channels} />
    </Layout>
  );
};

Index.getInitialProps = async ({ res }) => {
  try {
    const req = await fetch('https://api.audioboom.com/channels/recommended', {
      headers: {
        Accept: 'application/json; version=2',
      },
    });
    const { body: channels } = await req.json();
    return { channels, statusCode: 200 };
  } catch (e) {
    res.statusCode = 503;
    return ({ channels: [], statusCode: 503 });
  }
};

Index.propTypes = {
  channels: PropTypes.array.isRequired,
  statusCode: PropTypes.number.isRequired,
};

export default Index;
