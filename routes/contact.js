var express = require('express');
var router = express.Router();
const fs = require('fs');
var dateFormat = require('dateformat');

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('contact');
});
router.get('/login', function(req, res) {
  res.send('login');
});

router.get('/home', function(req, res) {
  res.send('home');
});

router.get('/', function(req, res, next) {
 res.render('contact', { title: 'CONTACT' });
 response = {
   name: req.query.name,
   email: req.query.email,
   tel: req.query.tel,
   message: req.query.text
 //  gender: req.query.gender
 };
 console.log(response);
 res.end(JSON.stringify(response));
 });

 router.post('/', function(req,res,next) {
   var content = {};
   content["name"] = req.body.name.toString();
   content["email"] = req.body.email.toString();
   content["tel"] = req.body.tel.toString();
   content["text"] = req.body.text.toString();
 //  content["gender"] = req.body.gender.toString();
 var json_file = "data.json";
 var date = new Date();
  json_file = "data" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + ".json";
   console.log(content);
   fs.writeFile("./" + json_file, JSON.stringify(content), 'utf8', function (err) {
         if (err) {
             return console.log(err);
         }

      console.log("The file was saved!");
     });
   res.redirect('/home');
});




module.exports = router;
