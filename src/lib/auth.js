import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {logger} from "./logger";
dotenv.load();
/** Authentication of user
* @authenticate user by generating token
* @verifyToken by matching user token with secret key
*/
const authenticate=(req,res)=>{
	var reply={
		message:""
	};
	if(req.body.name==null||req.body.name.trim().length==0)
	{
		reply.message="Wrong name";
	}
	if(req.body.password==null||req.body.password.trim().length==0)
	{
		reply.message+=" Wrong password";
	}
	else if(req.body.name!=null&&req.body.name.trim().length>0&&req.body.password!=null&&req.body.password.trim().length>0) {
		reply.message="Login Successfully!";
		var token=jwt.sign({name:req.body.name,password:req.body.password},process.env.token);
	}
	if(token)
	{

		return  res.status(200).json({"token":token});
	}
	else {
		return  res.status(403).json({"message":reply.message});
	}
};
const verifyToken=(req,res)=>{
	jwt.verify(req.params.token,process.env.token,(err)=>{
		if(err){
			res.send({"err":err});
		}

	});
};
export {authenticate,
	verifyToken};
