import Heber from '../model/Heber'

const createHeber = async (req, res) => {
    const hebers = await Heber.create(req.body)
    return res.send(hebers)
}

const getAllHeber = async (req, res) => {
    const hebers = await Heber.find()
    return res.render("pages/admission/hebergement",{hebers})
}

const getAllHebers = async (req, res) => {
    const hebers = await Heber.find()
    return res.send(hebers)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteHeber = async (req, res) => {
    const hebers = await Heber.findByIdAndDelete(req.params.id);
    return res.send(hebers);
}

const updateHeber = async (req, res) => {
    const hebers = await Heber.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(hebers);
}

export { createHeber, getAllHeber,deleteHeber,updateHeber,getAllHebers }