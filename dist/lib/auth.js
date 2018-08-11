"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.verifyToken = exports.authenticate = undefined;

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _logger = require("./logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.load();
var authenticate = function authenticate(req, res) {
	var reply = {
		message: ""
	};
	if (req.body.name == null || req.body.name.trim().length == 0) {
		reply.message = "Wrong name";
	}
	if (req.body.password == null || req.body.password.trim().length == 0) {
		reply.message += " Wrong password";
	} else if (req.body.name != null && req.body.name.trim().length > 0 && req.body.password != null && req.body.password.trim().length > 0) {
		reply.message = "Login Successfully!";
		var token = _jsonwebtoken2.default.sign({ name: req.body.name, password: req.body.password }, process.env.token);
	}
	if (token) {

		return res.status(200).json({ "token": token });
	} else {
		return res.status(403).json({ "message": reply.message });
	}
};
var verifyToken = function verifyToken(req, res) {
	_jsonwebtoken2.default.verify(req.params.token, process.env.token, function (err) {
		if (err) {
			res.send({ "err": err });
		}
	});
};
exports.authenticate = authenticate;
exports.verifyToken = verifyToken;