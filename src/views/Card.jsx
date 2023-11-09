const React = require('react');
const Sock = require('./components/Sock')

const Card = ({ design }) => (
  <div className="card" style={{ width: 300 }}>
    <br />
    <Sock design={design} />
    {/* <img src="/img/logo.png" className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">Дизайн: {design.Design.name}</h5>
      <p className="card-text">
      Создан пользователем: {design.User.login}
      </p>
      
         <a href="#" className="btn btn-primary" >
        Купить
      </a>
      <br />
      <br />
      <a href="#" className="btn btn-primary">
        Удалить из избранного
      </a>
      <br />
      <br />
      <a href={'onedesign/' + design.Design.id} className="btn btn-primary">
        Подробнее
      </a>
     
     
    </div>
  </div>
);
module.exports = Card;

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
