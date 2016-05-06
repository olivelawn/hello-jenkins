var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello jenkins the sequel', function(done) {
    request(app).get('/').expect('hello jenkins the sequel', done);
  });
});
