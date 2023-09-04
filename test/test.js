var request = require('supertest');
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });

    it('respond with a 404 status for a non-existing route', function(done) {
        request(app).get('/nonexistent').expect(404, done);
    });

    // Add more test cases as needed
});