import dotenv from "dotenv";
dotenv.load();
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(process.env.token, 12345);
    });
  });
});
