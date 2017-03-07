var http = require('http');
var asset = require('assert');

describe('api v1', function(){
  describe('GET /api/v1/tasks', function(){
    
    it('should return 200 response code', function(done){
      http.get({ path: '/api/v1/tasks', port: 3001 }, function(res){
        assert.equal(res.statusCode, 200);
        done();
      });
    });

    it('should return json', function(done){
      http.get({ path: '/api/v1/tasks', port: 3001 }, function(res){
        assert.equal(res.headers["content-type"], "application/json; charset=utf-8");
        done();
      });
    });
    
  });
});