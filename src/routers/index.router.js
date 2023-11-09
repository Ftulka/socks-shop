const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Index = require("../views/Index");
const Bucket = require("../views/Bucket");
const { checkUser } = require("../middlewares/checkUser");
const { Order, Position, Design } = require("../../db/models");
const Generator = require("../views/pages/Generator");

router.get("/", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Index, { user }, res);
});

router.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("myCookie");
    res.redirect("/");
  });
});

router.get("/bucket", async (req, res) => {
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

router.get("/generator", async (req, res) => {
  renderTemplate(Generator, { user: req.session?.user }, res);
});

module.exports = router;
