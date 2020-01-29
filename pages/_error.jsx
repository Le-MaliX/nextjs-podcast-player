import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import Layout from '../components/Layout';

function Error({ statusCode }) {
  return (
    <Layout title="Uh-oh! 😨">
      {(statusCode === 404)
        ? (
          <div className="message">
            <h1>
              Esta página no existe
              <br />
              ☹
            </h1>
            <p><Link href="/"><span>Volver a home</span></Link></p>
          </div>
        )
        : (
          <div className="message">
            <h1>
              Hubo un problema
              <br />
              ☹
            </h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
        )}
      <style jsx>
        {`
          .message {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 52px);
          }
          h1 {
            margin-bottom: 2em;
            text-align: center;
          }
          span {
            text-align: center;
            color: #222;
            cursor: pointer;
          }
        `}
      </style>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = (res)
    ? res.statusCode
    : (err)
      ? err.statusCode
      : 404;
  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
