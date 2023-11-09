const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Socks</title>
      </head>

      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header>
          <Navbar user={user} />
        </header>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <footer className="bg-light text-center text-white">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <h5>почта: info@enjoysocks.ru</h5>
            <h5>адрес: г. Москва, Шоссе Энтузиастов 12
            ст2</h5>
             
          </div>
        </footer>
      </body>
    </html>
  );
};
