const orderRouter = require('express').Router();
const { Order } = require('../../db/models');

orderRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Такого заказа не существует' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

orderRouter.post('/', async (req, res) => {
  try {
    const { userId, address } = req.body;
    const newOrder = await Order.create({ userId, address });
    res.json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = orderRouter;
