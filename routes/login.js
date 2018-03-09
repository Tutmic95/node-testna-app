var express = require('express');
var router = express.Router();
const username="haris";
const password="haris1";
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('login');
});
router.get('/home', function(req, res,) {
  res.send('home');
});

router.get('/contact', function(req, res,) {
  res.send('contact');
});


router.post('/', function(request,res,body) {

if (request.body.username == "haris" && request.body.password=="1"){
    res.render('success');

} else {
  res.render('login');
}
});


module.exports = router;
