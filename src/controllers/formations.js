import Formation from '../model/Formation'

const createFormation = async (req, res) => {
    const formations = await Formation.create(req.body)
    return res.send(formations)
}

const getAllFormations = async (req, res) => {
    const formations = await Formation.find()
    return res.render("pages/formation/formation",{formations})
}

const getAllFormation = async (req, res) => {
    const formations = await Formation.find()
    return res.send(formations)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteFormation = async (req, res) => {
    const formations = await Formation.findByIdAndDelete(req.params.id);
    return res.send(formations);
}

const updateFormation = async (req, res) => {
    const formations = await Formation.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(formations);
}

export { createFormation, getAllFormation,deleteFormation,updateFormation,getAllFormations }