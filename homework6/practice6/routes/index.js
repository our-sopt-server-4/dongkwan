var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/home', require('./home')); // 현재경로의 user.js폴더를 모듈로 가져올거다.

module.exports = router;




