const React = require('react');
const Layout = require('./Layout');


module.exports = function Index({ user }) {
  return (
    <Layout user={user}>
      

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1157518422/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5-%D0%BD%D0%BE%D1%81%D0%BA%D0%B8-%D0%BA%D0%B0%D0%B4%D1%80-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9-%D1%84%D0%BE%D0%BD-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B0.jpg?s=1024x1024&w=is&k=20&c=1Ajxie1yrCCATrbWkzN3Gxg-qxnf31Mnmj1874Y-JJY=')`,
          height: '100%',
          opacity: 0.8,
        }}
      >
       <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Самое время быть уникальным! </h1>
              {/* <h4 className="mb-3">Смоделируй свою любимую пару носков!</h4> */}
              <a className="btn btn-outline-light btn-lg" href="/registerclient" role="button">Смоделируй свою любимую пару носков!</a>
              <br />
              <br />
            </div>
          </div>
        </div>
       
          {/* <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h1 className="mb-5" style={{ color: 'purple', border: '2px solid purple', borderRadius: '15px', padding: '10px', backgroundColor: '#e6e6ff' }}>
  Самое время быть уникальным! 
  Смоделируй свою любимую пару носков!
</h1>


              <div id="weather-container"></div>
            </div>
          </div>
        </div> */}
        <br />
      </div>
      <script defer src="/js/index.js" />
    </Layout>
  );
};
