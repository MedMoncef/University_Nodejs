import Programme from '../model/Programme'

const createProgramme = async (req, res) => {
    const programmes = await Programme.create(req.body)
    return res.send(programmes)
}

const getAllProgrammes = async (req, res) => {
    const programmes = await Programme.find()
    return res.render("pages/admission/programmes",{programmes})
}

const getAllProgramme = async (req, res) => {
    const programmes = await Programme.find()
    return res.send(programmes)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteProgramme = async (req, res) => {
    const programmes = await Programme.findByIdAndDelete(req.params.id);
    return res.send(programmes);
}

const updateProgramme = async (req, res) => {
    const programmes = await Programme.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(programmes);
}

export { createProgramme, getAllProgramme,deleteProgramme,updateProgramme,getAllProgrammes }