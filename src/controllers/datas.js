import User from '../model/User'
import express from "express";
import nodemailer from "nodemailer"
import bcrypt from 'bcryptjs'

const createData = async (req, res) => {
    const users = await Apple.create(req.body)
    return res.send(users)
}

const getAllData = async (req, res) => {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/user');
		}else{
			//console.log("found");
			return res.render('page/login/data', {"name":data.username,"email":data.email});
		}
	});
}

const getAllDatas = async (req, res) => {
    const users = await Apple.find()
    return res.send(users)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteData = async (req, res) => {
    const users = await Apple.findByIdAndDelete(req.params.id);
    return res.send(users);
}

const updateData = async (req, res) => {
    const users = await Apple.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(users);
}

export { createData, getAllData,getAllDatas,deleteData,updateData }