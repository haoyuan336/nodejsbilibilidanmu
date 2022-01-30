var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // console.log("req" , req);
  // res.send("success");
});

module.exports = router;
