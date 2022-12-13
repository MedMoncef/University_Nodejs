import User from '../model/User'

const createLogin = async (req, res) => {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				//console.log(req.session.userId);
				res.redirect('/data');
				
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

export { createLogin, getAllLogin}