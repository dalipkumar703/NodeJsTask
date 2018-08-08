'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_express2.default.static('./'));
app.get('/', function (req, res) {
  res.status(200).json({ "message": "Welcome to Node.js & Express" });
});
app.post('/login', function (req, res) {
  authenticate(req, res);
});
var logger = _winston2.default.createLogger({
  level: 'info',
  format: _winston2.default.format.json(),
  transports: [new _winston2.default.transports.File({ filename: 'error.log', level: 'error' }), new _winston2.default.transports.File({ filename: 'combined.log' })]
});

app.listen(process.env.PORT || 3000, function () {
  return logger.info("Listening to port 3000");
});