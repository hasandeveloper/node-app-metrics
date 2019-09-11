const request = require('supertest');
const app = require('../app');

describe('App', function() {
  it('responds pong', function(done) {
    request(app)
      .get('/ping')
      .expect({message: 'PONG'}, done);
  });

  it('responds hello world', function(done) {
    request(app)
      .get('/api/v1/hello')
      .expect({message: 'Hello World!'}, done);
  });
}); 
