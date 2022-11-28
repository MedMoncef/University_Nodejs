import Inscription from '../model/Inscription'

const createInscription = async (req, res) => {
    const inscriptions = await Inscription.create(req.body)
    return res.send(inscriptions)
}

const getAllInscription = async (req, res) => {
    const inscriptions = await Inscription.find()
    return res.render("pages/login/inscription",{inscriptions})
}

const getAllInscriptions = async (req, res) => {
    const inscriptions = await Inscription.find()
    return res.send(inscriptions)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteInscription = async (req, res) => {
    const inscriptions = await Inscription.findByIdAndDelete(req.params.id);
    return res.send(inscriptions);
}

const updateInscription = async (req, res) => {
    const inscriptions = await Inscription.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(inscriptions);
}

export { createInscription, getAllInscription,getAllInscriptions,deleteInscription,updateInscription }