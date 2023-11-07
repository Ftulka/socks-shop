const positionRouter = require('express').Router();
const { Position } = require('../../db/models');

positionRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const positionToDelete = await Position.destroy({ where: { id } });

    if (!positionToDelete) {
      return res.status(404).json({ error: 'Такого заказа не существует' });
    }
    res.json({ positionToDelete });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

positionRouter.post('/', async (req, res) => {
  try {
    const { orderId, designId, quantity } = req.body;
    const newPosition = await Position.create({ orderId, designId, quantity });
    res.json(newPosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = positionRouter;
