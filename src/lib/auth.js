import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {logger} from "./logger";
dotenv.load();
logger.info(process.env.token,"token value");
const authenticate=(req,res)=>{
  var reply={
    message:""
  };
  if(process.env.clientName!=req.body.name)
  {
    reply.message="Wrong name";
  }
  if(process.env.password!=req.body.password)
  {
    reply.message+=" Wrong password";
  }
  else if(process.env.clientName===req.body.name&&process.env.secret===req.body.password) {
  reply.message="Login Successfully!";
  var token=jwt.sign({name:process.env.clientName,password:process.env.secret},process.env.token);
  }
  if(token)
  {
  return  res.send(token);
  }
  else {
  return  res.send(reply.message);
  }
}
export {authenticate};
