const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Index = require('../views/Index');
const Bucket = require('../views/Bucket');
const { Order, Position, Design } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Index, {}, res);
});

router.get('/bucket', async (req, res) => {
  const data = await Order.findAll({
    where: { userId: 2, isDone: false },
    include: [
      {
        model: Position,
        include: [
          {
            model: Design,
          },
        ],
      },
    ],
  });
  const order = data.map((el) => el.get({ plain: true }));
  console.log(JSON.stringify(data, null, 2));
  renderTemplate(Bucket, { order: order[0] }, res);
});

module.exports = router;
