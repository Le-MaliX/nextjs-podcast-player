import React from 'react';
import Link from 'next/link';

const Header = () => (
  <span>
    <Link href="/">
      <header>Podcast</header>
    </Link>
    <style jsx>
      {`
        header {
          color: #FFF;
          background: #8756ca;
          padding: 15px;
          text-align: center;
          cursor: pointer;
        }
      `}
    </style>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: system-ui;
          background: #EEE;
        }
      `}
    </style>
  </span>
);

export default Header;
