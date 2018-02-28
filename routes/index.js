var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/uploadImage', function(req,res,next){
  console.error(`Request ID . ${req.headers['x-request-id']}`)
  // res.sendStatus(200);
  res.status(200).end();
});

module.exports = router;
