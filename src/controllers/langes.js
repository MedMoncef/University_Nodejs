import Lange from '../model/Lange'

const createLange = async (req, res) => {
    const langes = await Lange.create(req.body)
    return res.send(langes)
}

const getAllLanges = async (req, res) => {
    const langes = await Lange.find()
    return res.render("pages/langue/lange",{langes})
}

const getAllLange = async (req, res) => {
    const langes = await Lange.find()
    return res.send(langes)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteLange = async (req, res) => {
    const langes = await Lange.findByIdAndDelete(req.params.id);
    return res.send(langes);
}

const updateLange = async (req, res) => {
    const langes = await Lange.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(langes);
}

export { createLange, getAllLange,deleteLange,updateLange,getAllLanges }