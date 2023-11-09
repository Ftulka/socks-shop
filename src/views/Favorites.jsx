const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

const Favorites = ({ favorites, user }) => (
  <Layout user={user}>
    {favorites.length === 0 ? (
      <div>Здесь пока ничего нет, добавьте какой-нибудь носок в избранное</div>
    ) : (
      <div style={{ display: 'flex' }}>
        {favorites.map((design, index) => (
          <Card design={design} />
        ))}
      </div>
    )}
  </Layout>
);
module.exports = Favorites;
