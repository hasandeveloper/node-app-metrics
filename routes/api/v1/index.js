const express = require('express');
const router = express.Router();
const statsD = require('../../../middlewares/statsd')
const appstatsd = require('appmetrics-statsd').StatsD({prefix: 'hello'});

var SDC = require('statsd-client')
const sdc = new SDC({prefix: 'statsd.example.'})

/* GET home page. */
router.get('/hello', statsD('hello'), function(req, res, next) {
  sdc.increment('hello.200');
  res.status(200).send({
    message: 'Hello World!'
  });
});

module.exports = router;