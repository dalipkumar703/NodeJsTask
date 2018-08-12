import express from "express";
import { log } from "./lib/logger";
import bodyParser from "body-parser";
import { authenticate, verifyToken } from "./lib/auth";
import { applyJsonPatch } from "./controllers/json-patch";
import { generateThumbnail } from "./controllers/thumbnail";
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("./"));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Node.js & Express" });
});
/**Api call for creating token
 * Pass name and password in json format with header content-type: application/x-www-url-encoded
 *@param {string} name
 *@param {string} password
 */
app.post("/login", (req, res) => {
  authenticate(req, res);
});
/**Api call for applying jsonpatch operation
* Pass {
	"info":{
		"name":"Dalip",
		"profession":"Software Developer",
		"nationality":"Indian"
	},
	"patch":{
	"obj":[
		{ "op": "replace", "path": "/name", "value": "Dalip Thakkar" },
		{"op":"add", "path":"/organisation", "value":"wmtc"},
		{ "op": "remove", "path": "/nationality" },
		{ "op": "copy", "from": "/name", "path": "/fullname" },
		{ "op": "move", "from": "/name", "path": "/fullname" },
		{ "op": "test", "path": "/profession", "value": "Software Developer" }
		]


	} in json format with header content-type: application/json
*@param {object}
*/
app.post("/api/json-patch/:token", (req, res) => {
  verifyToken(req, res);
  applyJsonPatch(req.body, res);
});
/**Api call for thumbnail
 *Pass img in json format with header content-type:application/json.
 *@param {string} img
 */
app.post("/api/thumbnail-generate/:token", (req, res) => {
  verifyToken(req, res);
  generateThumbnail(req, res);
});

app.listen(process.env.PORT || 3000, () => {});
