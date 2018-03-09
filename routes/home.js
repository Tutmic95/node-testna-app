var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('home');
});
router.get('/login', function(req, res) {
  res.send('login');
});

router.get('/contact', function(req, res) {
  res.send('contact');
});

module.exports = router;
