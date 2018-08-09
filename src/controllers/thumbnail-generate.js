import {log} from "../lib/logger";
import fs from "fs";
const path=require("path");
import request from "request";
const sharp = require('sharp');

const generateThumbnail=(req,res)=>{
let result=req.body;
 let loc=path.join(__dirname+'../../public/image/socialcops.png');
  request(result.img).pipe(fs.createWriteStream('public/image/socialcops.png'));
  sharp('socialcops.png')
  .resize(320, 240)
  .toFile('socialcops-small.png', (err, info) => {});
/*
 let transform=sharp(loc).resize(50,50).on('error',()=>{
      res.send({error:true});
    });
    fs.createReadStream(transform).pipe(fs.createWriteStream('socialcops50.png'));
  // fs.createWriteStream('public/image/socialcops.png').pipe(transform);
//request(transform).pipe(fs.createWriteStream('public/image/socialcops.png'));
*/
  res.send("done");
}

export {generateThumbnail};
