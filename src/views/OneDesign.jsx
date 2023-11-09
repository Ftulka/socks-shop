const React = require('react');
const Layout = require('./Layout');
//const Card = require("./Card");
const Card2 = require('./components/Sock')


module.exports = function OneDesign({ user, design }) {
  return (
    <Layout user={user}>
      
      <div>
    <div>
      
        <Card2 design={design} />
      
    </div>
  </div>


      
    </Layout>
  );
};
