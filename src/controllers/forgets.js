import Apple from '../model/User'
import express from "express";
import nodemailer from "nodemailer"
import bcrypt from 'bcryptjs'

const createForget = async (req, res) => {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
}

const getAllForget = async (req, res) => {
    const users = await Apple.find()
    return res.render("pages/login/forget",{users})
}


export { createForget, getAllForget }