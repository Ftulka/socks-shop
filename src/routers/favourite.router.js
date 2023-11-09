const router = require("express").Router();
const { Favourite } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    const { userId, designId } = req.body;
    const fav = await Favourite.create({
      userId,
      designId,
    });
    res.json({ designId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
