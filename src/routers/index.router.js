const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Index = require("../views/Index");

const { checkUser } = require("../middlewares/checkUser");

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

module.exports = router;
