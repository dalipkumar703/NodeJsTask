"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.log = undefined;

var _bunyan = require("bunyan");

var _bunyan2 = _interopRequireDefault(_bunyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _bunyan2.default.createLogger({ name: "NodeJsTask" });
exports.log = log;