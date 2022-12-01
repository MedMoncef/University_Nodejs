import Apple from '../model/User'
import express from "express";
import nodemailer from "nodemailer"
import bcrypt from 'bcryptjs'

const createUser = async (req, res) => {
    console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			Apple.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					Apple.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new Apple({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
}

const getAllUser = async (req, res) => {
    const users = await Apple.find()
    return res.render("pages/login/register",{users})
}

const getAllUsers = async (req, res) => {
    const users = await Apple.find()
    return res.send(users)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteUser = async (req, res) => {
    const users = await Apple.findByIdAndDelete(req.params.id);
    return res.send(users);
}

const updateUser = async (req, res) => {
    const users = await Apple.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(users);
}

export { createUser, getAllUser,getAllUsers,deleteUser,updateUser }