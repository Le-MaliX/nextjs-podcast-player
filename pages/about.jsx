import Layout from '../components/Layout';

const about = () => (
  <Layout title="About">
    <div className="flex">
      <img src="/android-icon-192x192.png" alt="Logo" />
      <h2>Created by:</h2>
      <h1>
        <a href="https://github.com/LeMalix" target="_blank" rel="noopener noreferrer">
          Le_Malix
        </a>
      </h1>
      <p>Un proyecto para el aprendizaje de server side rendering con NextJS</p>
      <small className="credits">
        API provided by
        {' '}
        <a href="https://github.com/audioBoom/api" target="_blank" rel="noopener noreferrer">
          Audioboom
        </a>
        . Icon Designed by
        {' '}
        <a href="https://thenounproject.com/normanying/" target="_blank" rel="noopener noreferrer">
          Norman Ying
        </a>
        . Font in use
        {' '}
        <a href="https://watchdogsfont.com/" target="_blank" rel="noopener noreferrer">
          Hacked
        </a>
        {' '}
        designed by
        {' '}
        <a href="https://davidlibeau.fr/" target="_blank" rel="noopener noreferrer">
          David Libeau
        </a>
      </small>
    </div>

    <style jsx>
      {`
        .flex {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 67px);
        }
        img {
          max-width: 50%;
          max-height: 50vh;
          border-radius: 50%;
        }
        p, h2, small {
          color: white;
          text-align: center;
          max-width: 75%;
        }
        h2{
          margin-bottom: 0px;
        }
        h1 {
          font-family: 'hacked';
          font-weight: 100;
          margin-top: 0px;
        }
        h1>a{
          color: #F9B200;
        }
        a {
          color: white;
        }
      `}
    </style>
  </Layout>
);

export default about;
