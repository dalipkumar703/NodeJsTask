import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
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
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [

    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});



app.listen(process.env.PORT || 3000, () => logger.info("Listening to port 3000"));
