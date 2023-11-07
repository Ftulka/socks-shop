const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Index = require('../views/Index');




router.get('/',  (req, res) => {
    renderTemplate(Index, {}, res);
  });

  


  module.exports = router;
