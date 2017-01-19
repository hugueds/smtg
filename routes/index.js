var express = require('express');
var router = express.Router();
var bot = require('../telegram-bot/bot');

/* GET home page. */
router.get('/', function(req, res, next) {
  bot.emit('welcome');
  res.render('index');
});







module.exports = router;
