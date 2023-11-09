const orderRouter = require("express").Router();
const { User, Order, Position, Design } = require("../../db/models");
const mailer = require('../../public/js/nodemailer')

orderRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: "Такого заказа не существует" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

orderRouter.post("/", async (req, res) => {
  try {
    const { isDo, address } = req.body;
    const newOrder = await Order.create({ userId, address });
    res.json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

orderRouter.put("/isDone/:id", async (req, res) => {
  // Отправка почты и изменение DONE
  try {
    const { id } = req.params;
    const findOrder = Order.findByPk(id, {
      include: [{model: User}, {model: Position, include: Design} ]
    });
    console.log(findOrder);
    findOrder.isDone = true;
    findOrder.save();

    const message = {
      from:'Mailer Test <amber38@ethereal.email>',
      to: 'amber38@ethereal.email',
      subject: 'Параметры заказа с сайта SOCKS SHOP',
      text: 'Текст письма'
    }
    mailer(message)

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = orderRouter;
