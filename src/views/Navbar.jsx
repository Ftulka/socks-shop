const React = require("react");

module.exports = function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
          <img src="/img/logo.png" alt="Logo" style={{ width: '35px', height: '35px' }}/> {/* Замените путь и имя файла на ваш логотип */}
        </a>
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
                <a className="nav-link" href="/">
                  На главную
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/generator">
                  Генератор носков
                </a>
              </li>
              

              <li className="nav-item">
                <a className="nav-link" href="/bucket">
                  Привет {user.login}!
                </a>
              </li>
              <li className="nav-item">
                <a id="favoritesLink" className="nav-link" href="/favorites">
                  Избранное
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bucket">
                  Корзина
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/logout">
                  Выйти
                </a>
              </li>
             
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">
                  На главную
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/generator">
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
    </nav>
  );
};
