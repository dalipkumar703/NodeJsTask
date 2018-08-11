"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateThumbnail = undefined;

var _logger = require("../lib/logger");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _sharp = require("sharp");

var _sharp2 = _interopRequireDefault(_sharp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateThumbnail = function generateThumbnail(req, res) {
	var result = req.body;
	var lastdot = result.img.lastIndexOf('.');
	var str = result.img.substr(lastdot, result.img.length - 1);
	if (str.match(/.jpe?g|.png|.tiff/) != null) {
		(0, _request2.default)(result.img, function (err, response, body) {
			if (!err && response.statusCode == 200) {
				(0, _request2.default)(result.img).pipe(_fs2.default.createWriteStream("socialcops.png")).on("finish", function (err, data) {
					if (!err) {
						_logger.log.info({ message: data }, "result");
						(0, _sharp2.default)("socialcops.png").resize(50, 50).toFile("socialcopssmall.png", function (err, info) {
							if (err) _logger.log.info({ error: err }, "error");else {
								_logger.log.info("success");

								res.redirect('http://localhost:3000/socialcopssmall.png');
							}
						});
					} else {
						_logger.log.info({ err: err }, "error");
					}
				});
			} else {
				res.status(response.statusCode).send("Status is not 200.");
			}
		});
	} else {
		res.send("Image format is not correct");
	}
};

exports.generateThumbnail = generateThumbnail;