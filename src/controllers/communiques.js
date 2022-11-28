import Communique from '../model/Communique'

const createcommuniques = async (req, res) => {
    const Communiques = await Communique.create(req.body)
    return res.send(Communiques)
}

const getAllcommunique = async (req, res) => {
    const Communiques = await Communique.find()
    return res.render("pages/presse/communiques",{Communiques})
}

const getAllcommuniques = async (req, res) => {
    const Communiques = await Communique.find()
    return res.send(Communiques)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deletecommuniques = async (req, res) => {
    const Communiques = await Communique.findByIdAndDelete(req.params.id);
    return res.send(Communiques);
}

const updatecommuniques = async (req, res) => {
    const Communiques = await Communique.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(Communiques);
}

export { createcommuniques, getAllcommuniques,deletecommuniques,updatecommuniques,getAllcommunique }