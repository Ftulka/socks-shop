const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Index = require('../views/Index');
const Generator = require('../views/generator')




router.get('/',  (req, res) => {
    renderTemplate(Index, {}, res);
  });

  router.get('/profile',  (req, res) => {
    renderTemplate(Generator, {}, res);
  });


  module.exports = router;
