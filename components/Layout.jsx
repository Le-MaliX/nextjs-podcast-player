import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import { PropTypes } from 'prop-types';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Link href="/">
        <div className="appName">Podcast Player</div>
      </Link>
    </header>

    {children}

    {/* Styles */}
    <style jsx>
      {`
        @font-face {
        font-family: 'hacked';
          src: url('/assets/fonts/hacked.ttf');
        }
        header {
          display: flex;
          background: #591F82;
        }
        .appName {
          font-family: 'hacked';
          color: #F9B200;
          padding: 15px;
          font-size: 30px;
          cursor: pointer;
          width: 100%
        }
      `}
    </style>
    <style jsx global>
      {`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu&display=swap');
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background: #674A7C;
          color: #FFF;
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
