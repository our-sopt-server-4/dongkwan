var express = require('express');
var router = express.Router();

router.use('/user', require('./user')); // 현재경로의 user.js폴더를 모듈로 가져올거다.
router.use('/post', require('./post')); // 현재경로의 post.js폴더를 모듈로 가져올거다.
router.use('/auth', require('./auth')); // 현재경로의 post.js폴더를 모듈로 가져올거다.
module.exports = router;
