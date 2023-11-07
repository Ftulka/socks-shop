const React = require('react');

module.exports = function Layout({ email }) {
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
        {email ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
                <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Генератор носков
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ourobjects">
                 Избранное
                </a>
              </li>
             
              
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Привет {email}!
                </a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="/login/logout">
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
                <a className="nav-link" href="/registerclient">
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
