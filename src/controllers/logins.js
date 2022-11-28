import Login from '../model/Login'

const createLogin = async (req, res) => {
    const logins = await Login.create(req.body)
    return res.send(logins)
}

const getAllLogin = async (req, res) => {
    const logins = await Login.find()
    return res.render("pages/login/login",{logins})
}

const getAllLogins = async (req, res) => {
    const logins = await Login.find()
    return res.send(logins)
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