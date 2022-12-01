import Login from '../model/User'

const createLogin = async (req, res) => {
    const logins = await Login.create(req.body)
    return res.send(logins)
}

const getAllLogin = async (req, res) => {
    const logins = await Login.find()
    return res.render("pages/login/login",{logins})
}

const getAllLogins = async (req, res) => {
    User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteLogin = async (req, res) => {
    const logins = await Login.findByIdAndDelete(req.params.id);
    return res.send(logins);
}

const updateLogin = async (req, res) => {
    const logins = await Login.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(logins);
}

export { createLogin, getAllLogin,getAllLogins,deleteLogin,updateLogin }