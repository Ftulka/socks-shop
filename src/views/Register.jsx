const React = require("react");

const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      {/* <div className='globalRegDiv'>
        <div className='regDiv'>
      <h2>Регистрация</h2>
      <script defer src="/js/register.js" />
      <form action="/register" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Login</label>
        <input name="login" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput1" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput2" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
      <h3 className='regMsg'></h3>
      </div>
      </div> */}
      <script defer src="/js/register.js" />
      <div className="container-fluid">
        <div className="offset-md-4 col-md-4 offset-sm-3 col-sm-6">
          <div className="form-container">
            <h3 className="title">Зарегистрируйтесь</h3>

            <span className="description">
              Заполните все поля для регистрации
            </span>
            <form className="form-horizontal" action="/register" method="POST" id="loginForm">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  name="login"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="exampleInput2"
                />
              </div>
              <div className="form-group" />
              <div className="regDiv" />
              <br />
              <button className="btn signup">Регистрация</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
