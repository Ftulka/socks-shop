const React = require("react");
const Layout = require("./Layout");

const Bucket = ({ order, user }) => (
  <Layout user={user}>
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {order.Positions.length > 0 ? (
          order.Positions.map((el, index) => (
            <tr data-positionid={el.id}>
              <th scope="row">{index + 1}</th>
              <th>{el.Design.name}</th>
              <th>1$</th>
              <th>{el.quantity}</th>
              <th>
                {1 * el.quantity}
                $
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                />
              </th>
            </tr>
          ))
        ) : (
          <tr>
            <th scope="row" colSpan="5">
              Нет позиций в заказе
            </th>
          </tr>
        )}
      </tbody>
      <tr>
        <th scope="row" colSpan="3">
          Address:
          {order.address}
        </th>
        <th>{order.Positions.reduce((acc, el) => acc + el.quantity, 0)}</th>
        <th>
          {order.Positions.reduce((acc, el) => acc + el.quantity, 0)}
          $
        </th>
      </tr>
    </table>
    <script src="/js/bucket.js" />
  </Layout>
);
module.exports = Bucket;

//   {
//     id: 1,
//     address: 'moscow, Red Square',
//     isDone: false,
//     userId: 1,
//     createdAt: '2023-11-08T09:24:51.886Z',
//     updatedAt: '2023-11-08T09:24:51.886Z',
//     Positions: [
//       {
//         id: 1,
//         quantity: 2,
//         orderId: 1,
//         designId: 1,
//         createdAt: '2023-11-08T09:24:51.922Z',
//         updatedAt: '2023-11-08T09:24:51.922Z',
//         Design: {
//           id: 1,
//           name: 'custom sock 1',
//           pictureUrl: '/pictures/alpaca.png',
//           colorCode: '#FF69B4',
//           printUrl: '/prints/1.png',
//           userId: 1,
//           createdAt: '2023-11-08T09:24:51.871Z',
//           updatedAt: '2023-11-08T09:24:51.871Z',
//         },
//       },
//       {
//         id: 2,
//         quantity: 1,
//         orderId: 1,
//         designId: 2,
//         createdAt: '2023-11-08T09:24:51.922Z',
//         updatedAt: '2023-11-08T09:24:51.922Z',
//         Design: {
//           id: 2,
//           name: 'custom sock 2',
//           pictureUrl: '/pictures/cactus.png',
//           colorCode: '#FFFF00',
//           printUrl: '/prints/2.png',
//           userId: 1,
//           createdAt: '2023-11-08T09:24:51.871Z',
//           updatedAt: '2023-11-08T09:24:51.871Z',
//         },
//       },
//       {
//         id: 3,
//         quantity: 3,
//         orderId: 1,
//         designId: 3,
//         createdAt: '2023-11-08T09:24:51.922Z',
//         updatedAt: '2023-11-08T09:24:51.922Z',
//         Design: {
//           id: 3,
//           name: 'custom sock 3',
//           pictureUrl: '/pictures/duck.png',
//           colorCode: '#00BFFF',
//           printUrl: '/prints/3.png',
//           userId: 2,
//           createdAt: '2023-11-08T09:24:51.871Z',
//           updatedAt: '2023-11-08T09:24:51.871Z',
//         },
//       },
//     ],
//   },
