// Metric Pusher
function statsd (path) {
  return function (req, res, next) {
    let method = req.method || 'unknown_method';
    req.statsdKey = [method.toLowerCase(), path].join('.');
    next();
  };
}

module.exports = statsd