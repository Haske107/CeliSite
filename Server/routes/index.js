var express = require('express');
var router = express.Router();
var fav = require('../public/favicon.ico');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/favicon.ico', function(req, res, next) {
    res.send(fav);
});

module.exports = router;
