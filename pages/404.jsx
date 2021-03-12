import Link from 'next/link';
import Layout from '../components/Layout';

const NotFound = () => (
  <Layout title="Uh-oh! 😨">
    <div className="message">
      <h1>
        Esta página no existe
        <br />
        ☹
      </h1>
      <p>
        <Link href="/">
          <span>Volver a home</span>
        </Link>
      </p>
    </div>
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
          color: #591f82;
          cursor: pointer;
        }
      `}
    </style>
  </Layout>
);

export default NotFound;
