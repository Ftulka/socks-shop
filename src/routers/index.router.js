const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Index = require('../views/Index');
const Bucket = require('../views');
const { Order, Position } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Index, {}, res);
});

router.get('/bucket', async (req, res) => {
  const order = await Order.findOne({
    where: { userId: 1 },
    include: [{ model: Position, raw: true }],
  });
  console.log(order);
  // renderTemplate(Bucket, {}, res);
});

module.exports = router;
