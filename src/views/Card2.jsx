const React = require('react');
const Sock = require('./components/Sock')
const Layout = require('./Layout');



const Card2 = ({ design }) => (
    <Layout>
  <div className="card" style={{ width: 350, marginLeft: '20px', border: '2px solid purple', borderRadius: '15px' }}>
<br />
<div className="card-body" >
<Sock design={design} />
    {/* <img src="/img/logo.png" className="card-img-top" alt="..." /> */}
    <br />
      <h5 className="card-title" style={{  marginLeft: '15px'}}>Дизайн: {design.name}</h5>
      <p className="card-text" style={{  marginLeft: '15px'}}>
        Создан пользователем: {design.User.login}
      </p>

      <a href="" className="btn btn-primary" style={{  marginLeft: '15px'}}>
        Купить
      </a>
      <br />
      <br />
      <a href="#" className="btn btn-primary" style={{  marginLeft: '15px'}}>
        Удалить из избранного
      </a>
      <br />
    </div>
    <br />
  </div>
  <br />
  </Layout>
);
module.exports = Card2;

// {
//     "id": 1,
//     "userId": 1,
//     "designId": 1,
//     "createdAt": "2023-11-08T09:24:51.932Z",
//     "updatedAt": "2023-11-08T09:24:51.932Z",
//     "Design": {
//       "id": 1,
//       "name": "custom sock 1",
//       "pictureUrl": "/pictures/alpaca.png",
//       "colorCode": "#FF69B4",
//       "printUrl": "/prints/1.png",
//       "userId": 1,
//       "createdAt": "2023-11-08T09:24:51.871Z",
//       "updatedAt": "2023-11-08T09:24:51.871Z"
//     }
//   },
