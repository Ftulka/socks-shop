require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "amber38@ethereal.email",
    pass: "dKT37WHeepzc2tNyrT",
  },
});

// const message = {
//   from: "amber38@ethereal.email",
//   to: "amber38@ethereal.email",
//   subject: "Параметры заказа с сайта SOCKS SHOP",
//   text: "Текст письма",
// };
// transporter.sendMail(message);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    console.log('Email sent: ', info);
    if (err) return console.log('mailer err --------------->', err);
  });
};

module.exports = mailer;
