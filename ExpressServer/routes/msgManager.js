var express = require('express');
var router = express.Router();
var messageList = [];
/* GET home page. */
router.post('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    // console.log("req" + req.body);
    res.send("success");
    messageList.push(req.body);
    // console.log("message list = " + messageList);
});
router.get('/getNewMsg', function (req, res, next) {
    if (messageList.length > 0) {
        var msg = messageList.shift();
        res.send(msg);
    }else{
        res.send("{}");
    }
});

module.exports = router;
