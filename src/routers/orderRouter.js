const orderRouter = require("express").Router();
const {
  User, Order, Position, Design,
} = require("../../db/models");
const mailer = require("../../public/js/nodemailer");

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

orderRouter.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const order = await Order.findOne({
      where: { userId, isDone: false },
    });

    if (!order) {
      return res.status(404).json({ error: "Такого заказа не существует" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

orderRouter.put("/isDone/:id", async (req, res) => {
  // Отправка почты и изменение DONE
  try {
    const { id } = req.params;
    const findOrder = await Order.findByPk(id, {
      include: [{ model: User }, { model: Position, include: Design }],
    });
    findOrder.isDone = true;
    findOrder.save();
    const findOrdertext = findOrder.get({ plain: true });
    const { email, login } = findOrdertext.User;
    const { address } = findOrdertext;
    const positions = findOrdertext.Positions;
    const filteredArray = positions.map((item) => {
      // Удаляем даты
      const { createdAt, updatedAt, Design } = item;
      const {
        createdAt: designCreatedAt,
        updatedAt: designUpdatedAt,
        ...restDesign
      } = Design;

      return {
        ...item,
        createdAt,
        updatedAt,
        Design: {
          ...restDesign,
        },
      };
    });
    const filteredArray2 = filteredArray.map((item) => {
      // Удаляем даты
      const { createdAt, updatedAt, ...rest } = item;

      return rest;
    });
    const detailOrder = JSON.stringify(filteredArray2, null, 2);
    console.log(findOrdertext);

    const message = {
      from: "Mailer Test <amber38@ethereal.email>",
      to: "amber38@ethereal.email",
      subject: "Параметры заказа с сайта SOCKS SHOP",
      text: `Заказ от ${login}  №${id} на адрес "${address}" сформирован. 
      Детали заказа:
      ${detailOrder}`,
    };
    mailer(message);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = orderRouter;
