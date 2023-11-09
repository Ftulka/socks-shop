const React = require('react');

const Card = ({ design }) => (
  <div className="card" style={{ width: 300 }}>
    <img src="/img/logo.png" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{design.Design.name}</h5>
      <p className="card-text">
        Created by:
        {design.User.login}
      </p>
      <a href="#" className="btn btn-primary">
        Buy
      </a>
      <a href="#" className="btn btn-primary">
        Remove from favorites
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
//     },
// "User": {
//   "id":1,
//   "login":'121312312'
// }
//   },
