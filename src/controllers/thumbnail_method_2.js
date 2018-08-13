import fs from "fs";
import request from "request";
import sharp from "sharp";

import { log } from "../lib/logger";


/**  generateThumbnail
 * Convert original image to 50*50 image.
*/
const generateThumbnail = (req, res) => {
  let result = req.body;
  let lastdot = result.img.lastIndexOf(".");
  let str = result.img.substr(lastdot, result.img.length - 1);
  if (str.match(/.jpe?g|.png|.tiff/) != null) {
    request(result.img, (err, response, body) => {
      if (!err && response.statusCode == 200) {
        if (err) res.send(err);
        request(result.img)
          .pipe(fs.createWriteStream("socialcops.png"))
          .on("finish", (err, data) => {
            if (!err) {

              if (err) res.send(err);
              sharp("socialcops.png") //library for iamge resize
                .resize(50, 50)
								.toBuffer()
								.then(data => {
        fs.writeFileSync('socialcopssmall.png', data);
				res.redirect("http://localhost:3000/socialcopssmall.png");
    })
    .catch(err => {
      res.send(err);
    });
            } else {
              res.send(err);
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

export { generateThumbnail };
