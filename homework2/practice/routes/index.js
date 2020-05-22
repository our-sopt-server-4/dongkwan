var express = require('express');
var router = express.Router();


var blogRouter = require('./api/blog');
var usersRouter = require('./api/users');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/blog', blogRouter);
router.use('/users', usersRouter);

module.exports = router
