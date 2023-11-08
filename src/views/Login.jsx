const React = require("react");

const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      {/* <div className='globalLogDiv'>
        <div className='logDiv'>
      <h2>Войдите на сайт</h2>
      <script defer src="/js/login.js" />
      <form method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Email</label>
        <input name="email" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput2" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
      </div>
      </div> */}
      <script defer src="/js/login.js" />
      <div className="container-fluid">
        <div className="offset-md-4 col-md-4 offset-sm-3 col-sm-6">
          <div className="form-container">
            <h3 className="title">Авторизация</h3>

            <span className="description">Введите свои данные для авторизации</span>
            <form className="form-horizontal" method="POST" id="loginForm">
              <div className="form-group">
                <input name="email" type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group" />
              <div className="logDiv" /> 
              <br />
              <button className="btn signup">Авторизация</button>
            </form>
          </div>
        </div>

      </div>
    </Layout>
  );
};
