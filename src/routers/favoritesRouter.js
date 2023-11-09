const favoriteRouter = require('express').Router();
const { Favourite } = require('../../db/models');

favoriteRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const design = await Favourite.findByPk(id);
    if (!design) {
      return res.status(404).json({ error: 'Такого избранного не существует' });
    }
    res.json(design);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

favoriteRouter.post('/', async (req, res) => {
  try {
    const { userId, designId } = req.body;
    const newFavorite = await Favourite.create({
      userId,
      designId,
    });
    res.json(newFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = favoriteRouter;
