import jsonpatch from "fast-json-patch";

import { log } from "../lib/logger";


/**Apply JsonPatch operation
 *@applyJsonPatch
 */
const applyJsonPatch = (req, res) => {
	let result = req; //body of request
if(!result.patch||!result.doc) {
  res.send("Patch or Document is not found");
}
  let validate=jsonpatch.validate(result.patch,result.doc);
   if(validate===undefined){
     let document = jsonpatch.applyPatch(result.doc, result.patch)
   		.newDocument;
   	log.info({ document: document }, "print");
   	res.status(200).send(document);
   }
   else {
     res.send(validate);
   }

};
export { applyJsonPatch };
