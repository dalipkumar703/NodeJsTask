import fs from "fs";
import request from "request";
import cloudinary from "cloudinary"; //Api for image resize

import { log } from "../lib/logger";
import {WIDTH,HEIGHT,URL} from "../config/constants";
import dotenv from "dotenv";


dotenv.load();
/**Convert original image to 50*50 image.
 *@generateThumbnail
 */
const generateThumbnail = (req, res) => {
	let body_result = req.body;
	cloudinary.config({
		cloud_name: process.env.CLOUD_NAME,
		api_key: process.env.API_KEY,
		api_secret: process.env.API_SECRET
	});
	log.info("working");

	cloudinary.uploader.upload(body_result.img, result => {
		if (!result.error) {
			log.info({ result: result }, "result");
			let resize_str = cloudinary.image(result.public_id, {
				width: WIDTH,
				height: HEIGHT
			});
			log.info({ res: result });
			let resize_url_start = resize_str.indexOf("'");
			let resize_url_end = resize_str.indexOf("'", resize_url_start + 1);
			log.info({ str_start: resize_url_end, str_end: resize_url_start }, "length");
			log.info({ url: resize_str.substr(resize_url_start + 1, resize_url_end) }, "resize url");
			request(body_result.img).pipe(
				fs.createWriteStream("public/images/socialcops.png")
			);
			request(resize_str.substring(resize_url_start + 1, resize_url_end))
				.pipe(fs.createWriteStream("public/images/scsmall.png"))
				.on("finish", (err, info) => {
					if (!err) {
						res.redirect(URL+"public/images/scsmall.png");
					} else {
						res.send({ err: err });
					}
				});
		} else {
			res.send(result.error);
		}
	});
};

export { generateThumbnail };
