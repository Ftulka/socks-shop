const React = require('react');

module.exports = function Layout( {user} ) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* logo
         */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Генератор носков
                </a>
              </li>
              <li className="nav-item">
                <a id='favoritesLink' className="nav-link" href="#">
                  Избранное
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Привет {user.login}!
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  Выйти
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ourmanagers">
                  Корзина
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Генератор носков
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Логин
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Регистрация
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <script defer src="/js/navbar.js" />
    </nav>
  );
};
