const React = require("react");
const Navbar = require("./components/Navbar");

const Layout = ({ children, active = "", user }) => (
  <html lang="ru">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Potluck</title>
      <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
      <Navbar user={user} />
      <div className="flex-column">{children}</div>
    </body>
  </html>
);
module.exports = Layout;
