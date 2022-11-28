import Etudiant from '../model/Etudiant'

const createEtudiant = async (req, res) => {
    const etudiants = await Etudiant.create(req.body)
    return res.send(etudiants)
}

const getAllEtudiant = async (req, res) => {
    const etudiants = await Etudiant.find()
    return res.render("pages/admission/etudiant",{etudiants})
}

const getAllEtudiants = async (req, res) => {
    const etudiants = await Etudiant.find()
    return res.send(etudiants)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteEtudiant = async (req, res) => {
    const etudiants = await Etudiant.findByIdAndDelete(req.params.id);
    return res.send(etudiants);
}

const updateEtudiant = async (req, res) => {
    const etudiants = await Etudiant.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(etudiants);
}

export { createEtudiant, getAllEtudiant,deleteEtudiant,updateEtudiant,getAllEtudiants }