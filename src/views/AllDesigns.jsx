const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

const AllDesigns = ({ allDesigns, user }) => (
  <Layout user={user}>
    <div style={{ display: 'flex' }}>
      {allDesigns.map((design, index) => (
        <div data-designid={design.id} className="card" style={{ width: 300 }}>
          <img src="/img/logo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{design.name}</h5>
            <p className="card-text">
              Created by:
              {design.User.login}
            </p>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              className="quantity"
              name="quantity"
              min="1"
              max="10"
              value="1"
            />
            <br />
            <a
              href="#"
              style={{ display: 'inline' }}
              className="btn btn-primary addToBucketButton"
            >
              Add to bucket
            </a>
            {design.Favourites.find((el) => el.userId === user.id) ? (
              <a
                href="#"
                style={{ display: 'inline' }}
                className="btn btn-secondary addToFavoritesButton disabled"
              >
                In favorites
              </a>
            ) : (
              <a
                href="#"
                style={{ display: 'inline' }}
                className="btn btn-secondary addToFavoritesButton"
              >
                Add to favorites
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    <script src="/js/allDesigns.js" />
  </Layout>
);
module.exports = AllDesigns;

// {
//     "id": 1,
//     "name": "custom sock 1",
//     "pictureUrl": "/pictures/alpaca.png",
//     "colorCode": "#FF69B4",
//     "printUrl": "/prints/1.png",
//     "userId": 1,
//     "createdAt": "2023-11-08T09:24:51.871Z",
//     "updatedAt": "2023-11-08T09:24:51.871Z",
//     "User": {
//       "id": 1,
//       "login": "ftulka",
//       "email": "rizo.ra@yandex.ru",
//       "password": "123",
//       "createdAt": "2023-11-08T09:24:51.847Z",
//       "updatedAt": "2023-11-08T09:24:51.847Z"
//     },
//     "Favourites": [
//       {
//         "id": 1,
//         "userId": 1,
//         "designId": 1,
//         "createdAt": "2023-11-08T09:24:51.932Z",
//         "updatedAt": "2023-11-08T09:24:51.932Z"
//       },
//       {
//         "id": 6,
//         "userId": 2,
//         "designId": 1,
//         "createdAt": "2023-11-08T09:24:51.932Z",
//         "updatedAt": "2023-11-08T09:24:51.932Z"
//       },
//       {
//         "id": 21,
//         "userId": 4,
//         "designId": 1,
//         "createdAt": "2023-11-09T10:46:39.201Z",
//         "updatedAt": "2023-11-09T10:46:39.201Z"
//       }
//     ]
//   },
