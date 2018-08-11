"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _logger = require("./lib/logger");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _auth = require("./lib/auth");

var _jsonPatch = require("./controllers/json-patch");

var _thumbnail = require("./controllers/thumbnail");

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
  (0, _auth.authenticate)(req, res);
});
app.post('/api/json-patch/:token', function (req, res) {
  (0, _auth.verifyToken)(req, res);
  (0, _jsonPatch.applyJsonPatch)(req, res);
});
app.post('/api/thumbnail-generate/:token', function (req, res) {
  (0, _auth.verifyToken)(req, res);
  (0, _thumbnail.generateThumbnail)(req, res);
});

app.listen(process.env.PORT || 3000, function () {});