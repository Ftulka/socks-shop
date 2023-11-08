const React = require('react');

const Card = ({ design }) => (
  <div>
    <div>{design.id}</div>
    <div>{design.name}</div>
    <div>{design.pictureUrl}</div>
    <div>{design.colorCode}</div>
    <div>{design.printUrl}</div>
    <div>{design.userId}</div>
    <button type="button">Buy</button>
    <button type="button">Add to favorites</button>
  </div>
);
module.exports = Card;
