import React from 'react';

export default () => (
  <>
    <h1>Hello world!</h1>
    <p>Implementando los Styled JSX</p>

    <img src="/platzi-logo.png" alt="Logo" />

    <style jsx>
      {`
        h1 {
          color: #EEE;
        }
        p {
          color: #AAA;
        }
        img {
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }
      `}
    </style>
    <style jsx global>
      {`
        body {
          background: #273b47;
        }
      `}
    </style>
  </>
);
