import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import {authenticate} from './lib/auth';
import {logger} from './lib/logger';
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
})




app.listen(process.env.PORT || 3000, () => logger.info("Listening to port 3000"));
