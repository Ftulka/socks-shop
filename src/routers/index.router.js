const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Index = require("../views/Index");
const Sock = require("../views/components/Sock");

router.get("/", (req, res) => {
  renderTemplate(Index, {}, res);
});

router.get("/sock", (req, res) => {
  renderTemplate(Sock, {}, res);
});

module.exports = router;
