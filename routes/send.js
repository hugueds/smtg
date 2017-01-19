var express = require('express');
var router = express.Router();

//Page to Send Messages
router.get('/', function(req, res, next) {
  res.render('send');
});

module.exports = router;
