const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const renderTemplate = require("../lib/renderTemplate");
const Register = require("../views/Register");

const { User } = require("../../db/models");

router.get("/", (req, res) => {
  renderTemplate(Register, null, res);
});

router.post("/", async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.status(403).json({ err: "Такой пользователь уже существует!" });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = (await User.create({ login, email, password: hash })).get(
        { plain: true }
      );

      const userClone = structuredClone(newUser);
      delete userClone.password;
      req.session.user = userClone;
      res.status(200).json({});
    }
  } catch (error) {
    console.log("error------>", error);
    res.status(500).json({ err: error });
  }
});

module.exports = router;
