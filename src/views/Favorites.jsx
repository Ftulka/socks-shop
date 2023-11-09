const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

const Favorites = ({ favorites }) => (
  <Layout>
    <div style={{ display: 'flex' }}>
      {favorites.map((design, index) => (
        <Card design={design} />
      ))}
    </div>
  </Layout>
);
module.exports = Favorites;
