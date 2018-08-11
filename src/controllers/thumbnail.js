import {log} from "../lib/logger";
import fs from "fs";
import request from "request";
import sharp from "sharp";
const generateThumbnail=(req,res)=>{
	 let result=req.body;
	 let lastdot=result.img.lastIndexOf('.');
   let str=result.img.substr(lastdot,result.img.length-1);
	if(str.match(/.jpe?g|.png|.tiff/)!=null){
		request(result.img,(err,response,body)=>{
			if(!err&&response.statusCode==200){
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
			}
			else {
				res.status(response.statusCode).send("Status is not 200.");
			}
		})

	}
else {
	res.send("Image format is not correct");
}

};

export  {
	generateThumbnail
};
