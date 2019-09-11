const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.status(200).send({
    message: 'PONG'
  });
});

module.exports = router;
