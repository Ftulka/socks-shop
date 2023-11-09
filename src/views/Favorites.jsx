const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');
const Sock = require('./components/Sock')

const Favorites = ({ favorites, user }) => (
  <Layout user={user}>
    <div style={{ display: 'flex' }}>
      {favorites.map((design, index) => (
        <Card design={design} />
      ))}
    </div>
  </Layout>
);
module.exports = Favorites;
