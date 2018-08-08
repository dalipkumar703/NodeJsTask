import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
const authenticate(req,res)={
  var message;
  if(process.env.clientName!=req.body.name)
  {
    message="wrong name";
  }
  if(process.env.password!=req.body.password)
  {
    message+=" wrong password";
  }
  else if(process.env.clientName===req.body.name&&process.env.password===req.body.password) {
  var token  =jwt.sign(process.env.clientName,process.env.secret);
  }
}
