const React = require('react');
 const Sock = require('./components/Sock')
const Card2 = ({ design }) => (
  <div className="card" style={{ width: 300 }}>

<div className="card-body">
<Sock design={design} />
    {/* <img src="/img/logo.png" className="card-img-top" alt="..." /> */}
    
      <h5 className="card-title">{design.name}</h5>
      <p className="card-text">
        Создан пользователем: 
        {/* {design.login} */}
      </p>

      <a href="#" className="btn btn-primary">
        Купить
      </a>
      <a href="#" className="btn btn-primary">
        Удалить из избранного
      </a>
    </div>
  </div>
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
