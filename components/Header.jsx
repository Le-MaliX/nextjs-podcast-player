import React from 'react';
import Link from 'next/link';

const Header = () => (
  <span>
    <Link href="/">
      <header>Podcast</header>
    </Link>

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
  </span>
);

export default Header;
