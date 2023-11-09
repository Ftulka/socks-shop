const React = require("react");
const Layout = require("../Layout");
const Sock = require("../components/Sock");

const Generator = ({ user }) => (
  <Layout user={user}>
    <form
      data-userid={user && `${user.id}`}
      id="gen-cont"
      className="container d-flex justify-content-center my-3"
    >
      <div id="btn-cont">
        <div>
          <h3>color</h3>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-white"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn" htmlFor="btn-white">
            white
          </label>

          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-yellow"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-yellow">
            yellow
          </label>

          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-purple"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-purple">
            purple
          </label>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-pink"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-pink">
            pink
          </label>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-lightGreen"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-lightGreen">
            lightGreen
          </label>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="btn-lightBlue"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-lightBlue">
            lightBlue
          </label>
        </div>

        <div>
          <h3>picture</h3>
          <input
            type="radio"
            className="btn-check"
            name="picture"
            id="btn-alpaca"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-alpaca">
            <img src="/img/pictures/alpaca.png" alt="" width="60" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="picture"
            id="btn-cactus"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-cactus">
            <img src="/img/pictures/cactus.png" alt="" width="60" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="picture"
            id="btn-duck"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-duck">
            <img src="/img/pictures/duck.png" alt="" width="60" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="picture"
            id="btn-yoda"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-yoda">
            <img src="/img/pictures/yoda.png" alt="" width="60" />
          </label>
        </div>

        <div>
          <h3>print</h3>
          <input
            type="radio"
            className="btn-check"
            name="print"
            id="btn-1"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-1">
            <img src="/img/prints/1.png" alt="" width="100" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="print"
            id="btn-2"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-2">
            <img src="/img/prints/2.png" alt="" width="100" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="print"
            id="btn-3"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-3">
            <img src="/img/prints/3.png" alt="" width="100" />
          </label>
          <input
            type="radio"
            className="btn-check"
            name="print"
            id="btn-4"
            autoComplete="off"
          />
          <label className="btn" htmlFor="btn-4">
            <img src="/img/prints/4.png" alt="" width="100" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name your socks
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue="Amazing Socks"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <button type="button" id="btn-cart" className="btn btn-warning mx-2">
            Add to cart
          </button>
        </div>
      </div>
      <div id="sock-cont">
        <Sock />
      </div>
    </form>
    <script defer src="/js/generator.js" />
  </Layout>
);
module.exports = Generator;
