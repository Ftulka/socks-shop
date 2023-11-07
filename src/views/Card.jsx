const React = require('react');

const Card = ({ design }) => (
  <div>
    <div>{design.id}</div>
    <div>{design.name}</div>
    <div>{design.pictureUrl}</div>
    <div>{design.colorCode}</div>
    <div>{design.printUrl}</div>
    <div>{design.userId}</div>
  </div>
);
module.exports = Card;
