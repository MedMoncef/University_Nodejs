import Diplome from '../model/Diplome'

const createDiplome = async (req, res) => {
    const diplomes = await Diplome.create(req.body)
    return res.send(diplomes)
}

const getAllDiplome = async (req, res) => {
    const diplomes = await Diplome.find()
    return res.render("pages/diplome/diplome",{diplomes})
}

const getAllDiplomes = async (req, res) => {
    const diplomes = await Diplome.find()
    return res.send(diplomes)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteDiplome = async (req, res) => {
    const diplomes = await Diplome.findByIdAndDelete(req.params.id);
    return res.send(diplomes);
}

const updateDiplome = async (req, res) => {
    const diplomes = await Diplome.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(diplomes);
}

export { createDiplome, getAllDiplome,deleteDiplome,updateDiplome,getAllDiplomes }