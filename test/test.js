
var dotenv=require('dotenv');
var assert = require('assert');
var request=require('request');
var bunyan=require('bunyan');
let chai=require('chai');
chai.should();
var log = bunyan.createLogger({name: 'nodeJstask'});
dotenv.load();
describe('Authentication Test', function() {
  describe('Login Test', function() {
    it('should return error when the token is not present', function() {
    let url='http://localhost:3000/login';
      log.info({message:url},"hello!");
      request({
        url:url,
        method:"POST",
        form:{name:"dalip",password:"dann"}
      },function(err,response,result){
      if (err) return done(err);

      response.body.should.have.property('token');

      })
    });
  });
  });
  describe('Api test',function(){
    describe('JsonPatch Test',function() {
      it("should return error when patch doesn't patch",function() {
        let url='http://localhost:3000/api/json-patch/';
        let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFsaXAiLCJwYXNzd29yZCI6ImRhbm4iLCJpYXQiOjE1MzM5ODIyNDB9.gMz7II8h1lJNx2YwV6-jlfMQ8hwFSx3zg-G09FaTePI';
        let json= {
"info":{
  "name":"Dalip",
  "profession":"Software Developer",
  "nationality":"Indian"
},
"patch":{
"obj":[
  { "op": "replace", "path": "/name", "value": "Dalip Thakkar" },
  {"op":"add", "path":"/organisation", "value":"wmtc"},
  { "op": "remove", "path": "/nationality" },
  { "op": "copy", "from": "/name", "path": "/fullname" },
  { "op": "move", "from": "/name", "path": "/fullname" },
  { "op": "test", "path": "/profession", "value": "Software Developer" }
  ]


}

};
        request({
          url:url+token,
          method:"POST",
          json:  json  },function(err,response,data){
  if(err) return done(err);
  let elements=[];
   response.body.keys(obj).forEach(function(e){
     elements.push(obj[e]);
   })
//expect(elements).to.have.elements(['fexpected_title_1','expected_title_2']);
  assert.equal(element[0],"Software Developer");
  assert.equal(element[1],"wmtc");
  assert.equal(element[2],"Dalip Thakkar");
})
      })
    })
  })
