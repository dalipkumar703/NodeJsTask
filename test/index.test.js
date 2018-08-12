import dotenv from "dotenv";
import assert from "assert";
import request from "request";
import bunyan from "bunyan";
import {should} from "chai";
let log = bunyan.createLogger({name: 'nodeJstask'});
dotenv.load();
describe('Authentication Test', ()=> {
  describe('Login Test', ()=>{
    it('should return error when the token is not present', function() {
    let url='http://localhost:3000/login';
      log.info({message:url},"hello!");
      /** request for testing login
      */
      request({
        url:url,
        method:"POST",
        form:{name:"dalip",password:"dann"}
      },(err,response,result)=>{
      if (err) return done(err);

      response.body.should.have.property('token');

      })
    });
  });
  });
  describe('Api test',()=>{
    let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFsaXAiLCJwYXNzd29yZCI6ImRhbm4iLCJpYXQiOjE1MzM5ODIyNDB9.gMz7II8h1lJNx2YwV6-jlfMQ8hwFSx3zg-G09FaTePI';
    describe('JsonPatch Test',()=> {
      it("should return error when patch doesn't patch",()=> {
        let url='http://localhost:3000/api/json-patch/';
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
/** request for testing json-patch
*/
        request({
          url:url+token,
          method:"POST",
          json:  json  },(err,response,data)=>{
  if(err) return done(err);
  let elements=[];
   response.body.keys(obj).forEach((e)=>{
     elements.push(obj[e]);
   })
//expect(elements).to.have.elements(['fexpected_title_1','expected_title_2']);
  assert.equal(element[0],"Software Developer");
  assert.equal(element[1],"wmtc");
  assert.equal(element[2],"Dalip Thakkar");
})
      })
    })

    describe('Thumbnail Test',()=>{
      it('should return 200 status',()=>{
      let url="http://localhost:3000/api/thumbnail-generate/";
        request({
          url:url+token,
          method:"POST",
          json:{
            img:"https://blog.socialcops.com/wp-content/uploads/2015/08/Ishus-Internship_option1.png"
          }
        },(err,response,data)=>{
          if(err) return done(err);
          assert.equal(response.status,"200");
        })
      })
    })
  })
