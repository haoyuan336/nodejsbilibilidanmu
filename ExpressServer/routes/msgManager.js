var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    console.log("req"+ req.body);
    res.send("success");
});

module.exports = router;
