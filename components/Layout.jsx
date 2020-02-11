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
      <Link href="/about">
        <div className="about">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="16px" height="16px">
            <path fill="#591F82" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z" />
            <path fill="#F9B200" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z" />
            <path fill="#F9B200" d="M20 10A2 2 0 1 0 20 14A2 2 0 1 0 20 10Z" />
            <g>
              <path fill="#F9B200" d="M22 28L22 16 17 16 17 17 18 17 18 28 17 28 17 29 23 29 23 28z" />
            </g>
          </svg>
        </div>
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
        .about {
          color: #F7D27B;
          padding: 20px 15px;
          font-size: 20px;
          cursor: pointer;
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
