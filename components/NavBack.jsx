import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

const NavBack = ({ id }) => (
  <>
    <nav>
      <Link href={`/channel?id=${id}`}>
        <h6 className="close">
          <span>&#11164;</span>
          {' '}
          Volver
        </h6>
      </Link>
    </nav>

    {/* Styles */}
    <style jsx>
      {`
        nav {
          background: none;
        }
        nav .close {
          display: inline-block;
          padding: 10px;
          margin: 15px;
          border-radius: 30px;
          color: white;
          cursor: pointer;
          text-decoration: none;
          background: #FFF;
          color: #222;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
      `}
    </style>
  </>
);

NavBack.propTypes = {
  id: PropTypes.number.isRequired,
};

export default NavBack;
