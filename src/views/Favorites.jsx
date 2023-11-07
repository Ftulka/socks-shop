const React = require('react');
const Card = require('./Card');

const Favorites = ({ designs }) => (
  <div>
    <div>
      {designs.map((design, index) => (
        <Card design={design} />
      ))}
    </div>
  </div>
);
module.exports = Favorites;
