import {log} from "../lib/logger";
var jsonpatch=require("fast-json-patch");

const applyJsonPatch=(req,res)=>{
	let result=req.body;
	let document=jsonpatch.applyPatch(result.info,result.patch.obj).newDocument;
	log.info({document:document},"print");
	res.status(200).send(document);
};
export {
	applyJsonPatch
};
