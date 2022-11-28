import Accelere from '../model/Accelere'

const createAccelere = async (req, res) => {
    const acceleres = await Accelere.create(req.body)
    return res.send(acceleres)
}

const getAllAcceleres = async (req, res) => {
    const acceleres = await Accelere.find()
    return res.render("pages/formation/formation_acc",{acceleres})
}

const getAllAccelere = async (req, res) => {
    const acceleres = await Accelere.find()
    return res.send(acceleres)
}

const deleteAcceleree = async (req, res) => {
    const acceleres = await Accelere.findByIdAndDelete(req.params.id);
    return res.send(acceleres);
}

const updateAccelere = async (req, res) => {
    const acceleres = await Accelere.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(acceleres);
}

export { createAccelere, getAllAccelere,getAllAcceleres,deleteAcceleree,updateAccelere }