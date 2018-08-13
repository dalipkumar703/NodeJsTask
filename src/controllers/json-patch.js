import jsonpatch from "fast-json-patch";

import { log } from "../lib/logger";


/**Apply JsonPatch operation
 *@applyJsonPatch
 */
const applyJsonPatch = (req, res) => {
	let result = req; //body of request
	let document = jsonpatch.applyPatch(result.info, result.patch.obj)
		.newDocument;
	log.info({ document: document }, "print");
	res.status(200).send(document);
};
export { applyJsonPatch };
