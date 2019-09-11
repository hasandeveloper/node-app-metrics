const request = require('supertest');
const app = require('../app');

describe('App', function() {
  it('responds pong', function(done) {
    request(app)
      .get('/ping')
      .expect({message: 'PONG'}, done);
  });
}); 
