const express = require('express');
const router = express.Router();
const appstatsd = require('appmetrics-statsd').StatsD({
  prefix: 'example-app'
});


/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.status(200).send({
    message: 'Hello World!'
  });
});

module.exports = router;