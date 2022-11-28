import BTP from '../model/BTP'

const createBTP = async (req, res) => {
    const btp = await BTP.create(req.body)
    return res.send(btp)
}

const getAllBTPs = async (req, res) => {
    const btp = await BTP.find()
    return res.render("pages/diplome/btp",{btp})
}

const getAllBTP = async (req, res) => {
    const btp = await BTP.find()
    return res.send(btp)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteBTP = async (req, res) => {
    const btp = await BTP.findByIdAndDelete(req.params.id);
    return res.send(btp);
}

const updateBTP = async (req, res) => {
    const btp = await BTP.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(btp);
}

export { createBTP, getAllBTP,deleteBTP,updateBTP,getAllBTPs }