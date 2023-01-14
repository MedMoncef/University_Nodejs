import User from '../model/User'
var session = require('express-session');
let UserID = 0;

const createLogin = async (req, res) => {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				UserID = data.unique_id;
				//console.log(req.session.userId);
				res.redirect('/data');

				// res.send({"Success":"Success!"});
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
}

const getAllLogin = async (req, res) => {
    const users = await User.find()
    return res.render("pages/login/login",{users})
}

// Profile routes --------------------------------------------------------------------------------------------------------

const createData = async (req, res) => {
    const users = await Apple.create(req.body)
    return res.send(users)
}

const getAllData = async (req, res) => {
	console.log("profile");
	User.findOne({unique_id:UserID},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/user');
		}else{
			//console.log("found");
			return res.render('pages/login/data.ejs', {"name":data.username,"email":data.email});
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

export { createLogin, getAllLogin, createData, getAllData,getAllDatas,deleteData,updateData }