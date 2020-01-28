import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PropTypes } from 'prop-types';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Link href="/">
      <header>Podcasts</header>
    </Link>

    { children }

    {/* Styles */}
    <style jsx>
      {`
        header {
          color: #FFF;
          background: #222;
          padding: 15px;
          text-align: center;
          cursor: pointer;
        }
      `}
    </style>
    <style jsx global>
      {`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background: #EEE;
        }
      `}
    </style>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
