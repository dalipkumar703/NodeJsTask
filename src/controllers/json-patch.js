import {applyOperation} from "fast-json-patch";
import {log} from "../lib/logger";

const applyJsonPatch=(req,res)=>{

log.info({message: req.body}, 'hi');
//applyOperation
res.send("successful");
};
export {applyJsonPatch};
