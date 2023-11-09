require("@babel/register");
require("dotenv").config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const {
  secureRoute,
  checkSession,
  checkUser,
} = require("./src/middlewares/checkUser");

//  const userRouter = require("./src/routers/index.router");
const indexRouter = require("./src/routers/index.router");
const designRouter = require("./src/routers/designRouter");
const orderRouter = require("./src/routers/orderRouter");
const positionRouter = require("./src/routers/positionRouter");
const loginRoutes = require("./src/routers/loginRoutes"); // RV
const regRoutes = require("./src/routers/regRoutes"); // RV
const favouriteRouter = require("./src/routers/favourite.router");
const favoriteRouter = require('./src/routers/favoritesRouter');

const dbConnectionCheck = require("./db/dbConnectCheck"); // RV

const { PORT } = process.env ?? 3500;

const app = express();
dbConnectionCheck();

const sessionConfig = {
  name: 'myCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Session',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));

app.use(checkSession); // RV

app.use("/", indexRouter);
app.use("/designs", designRouter);
app.use("/orders", orderRouter);
app.use("/positions", positionRouter);
app.use("/favourites", favouriteRouter);
app.use('/favorites', favoriteRouter);
app.use("/login", secureRoute, loginRoutes); // RV
app.use("/register", secureRoute, regRoutes); // RV

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
