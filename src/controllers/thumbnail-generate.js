import {log} from "../lib/logger";
import fs from "fs";
import request from "request";
import sharp from "sharp";
const generateThumbnail=(req,res)=>{
	let result=req.body;
	request(result.img).pipe(fs.createWriteStream("socialcops.png")).on("finish",(err,data)=>{
		if(!err) {
      
			log.info({message:data},"result");
			sharp("socialcops.png")
				.resize(50,50)
				.toFile("socialcopssmall.png", (err, info) => {
					if(err)
						log.info({error:err},"error");
					else {
						log.info("success");

            res.redirect('http://localhost:3000/socialcopssmall.png');
					}

				});
		}
		else {
			log.info({err:err},"error");
		}

	});


};

export  {
	generateThumbnail
};
