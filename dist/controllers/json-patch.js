"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.applyJsonPatch = undefined;

var _logger = require("../lib/logger");

var jsonpatch = require("fast-json-patch");

var applyJsonPatch = function applyJsonPatch(req, res) {
	var result = req.body;
	var document = jsonpatch.applyPatch(result.info, result.patch.obj).newDocument;
	_logger.log.info({ document: document }, "print");
	res.status(200).send(document);
};
exports.applyJsonPatch = applyJsonPatch;