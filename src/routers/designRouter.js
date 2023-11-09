const designRouter = require("express").Router();
const { Design, Favourite } = require("../../db/models");

designRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const design = await Design.findByPk(id);
    if (!design) {
      return res.status(404).json({ error: "Такого дизайна не существует" });
    }
    res.json(design);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

designRouter.get("/", async (req, res) => {
  try {
    const allDesigns = await Design.findAll({ raw: true });
    res.json(allDesigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

designRouter.post("/", async (req, res) => {
  try {
    const { name, pictureUrl, colorCode, printUrl, userId } = req.body;
    const newDesign = await Design.create({
      name,
      pictureUrl,
      colorCode,
      printUrl,
      userId,
    });
    res.json(newDesign.get({ plain: true }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = designRouter;
