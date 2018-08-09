import express from 'express';
import {log} from "./lib/logger";
import bodyParser from "body-parser";
import {authenticate,verifyToken} from "./lib/auth";
import {applyJsonPatch} from "./controllers/json-patch";
import {generateThumbnail} from "./controllers/thumbnail-generate";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('./'));
app.get('/', (req, res) => {
  res.status(200).json({ "message": "Welcome to Node.js & Express" });
});
app.post('/login',(req,res)=>{
authenticate(req,res);
});
app.post('/api/json-patch/:token',(req,res)=>{
verifyToken(req,res);
applyJsonPatch(req,res);
})
app.post('/api/thumbnail-generate/:token',(req,res)=>{
  verifyToken(req,res);
  generateThumbnail(req,res);
})




app.listen(process.env.PORT || 3000, () => log.info("Listening to port 3000"));
