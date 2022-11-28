import Actualite from '../model/Actualise'

const createActualite = async (req, res) => {
    const actualites = await Actualite.create(req.body)
    return res.send(actualites)
}

const getAllActualite = async (req, res) => {
    const actualites = await Actualite.find()
    return res.render("pages/presse/actualites",{actualites})
}

const getAllActualites = async (req, res) => {
    const actualites = await Actualite.find()
    return res.send(actualites)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteActualite = async (req, res) => {
    const actualites = await Actualite.findByIdAndDelete(req.params.id);
    return res.send(actualites);
}

const updateActualite = async (req, res) => {
    const actualites = await Actualite.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(actualites);
}

export { createActualite, getAllActualite,getAllActualites,deleteActualite,updateActualite }