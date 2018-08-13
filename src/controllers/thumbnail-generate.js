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
			let t = resize_str.indexOf("'");
			let y = resize_str.indexOf("'", t + 1);
			log.info({ y: y, t: t }, "length");
			log.info({ url: resize_str.substr(t + 1, y) }, "resize url");
			request(body_result.img).pipe(
				fs.createWriteStream("public/images/socialcops.png")
			);
			request(resize_str.substring(t + 1, y))
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
