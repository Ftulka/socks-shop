const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const renderTemplate = require("../lib/renderTemplate");
const Login = require("../views/Login");

const { User } = require("../../db/models");

router.get("/", (req, res) => {
  const { login } = req.session;
  renderTemplate(Login, { login }, res);
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = (await User.findOne({ where: { email } }));
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        const userClone = structuredClone(user.get({
          plain: true,
        }));
        delete userClone.password;
        req.session.user = userClone;
        res.status(200).json({});
      } else {
        res.status(403).json({ err: "Неверный пароль!" });
      }
    } else {
      res.status(403).json({ err: "Такой пользователь не найден!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
});

module.exports = router;
