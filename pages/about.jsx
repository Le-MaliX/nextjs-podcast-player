export default () => (
  <>
    <div className="flex">
      <img src="/wd-logo.png" alt="Logo" />
      <h2>Created by &#65533;&#65533;&#65533;</h2>
      <p>Proyecto de aprendizaje de NextJS</p>
    </div>

    <style jsx>
      {`
        .flex {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        img, p, h2 {
          max-width: 50%;
          max-height: 50vh;
        }
        p, h2 {
          color: white;
          text-align: center;
        }
      `}
    </style>

    <style jsx global>
      {`
        body {
          margin: 0;
          background: #222;
        }
      `}
    </style>
  </>
);
