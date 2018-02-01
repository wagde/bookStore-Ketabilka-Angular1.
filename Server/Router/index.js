var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.sendfile('Client/App.html')
});
module.exports = router;    
