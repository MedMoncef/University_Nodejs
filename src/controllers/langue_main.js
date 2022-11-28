import Langue_main from '../model/Langue_main'

const createLangue = async (req, res) => {
    const langues = await Langue_main.create(req.body)
    return res.send(langues)
}

const getAllLangues = async (req, res) => {
    const langues = await Langue_main.find()
    return res.render("pages/langue/langue_main",{langues})
}

const getAllLangue = async (req, res) => {
    const langues = await Langue_main.find()
    return res.send(langues)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteLangue = async (req, res) => {
    const langues = await Langue_main.findByIdAndDelete(req.params.id);
    return res.send(langues);
}

const updateLangue = async (req, res) => {
    const langues = await Langue_main.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(langues);
}

export { createLangue, getAllLangue,deleteLangue,updateLangue,getAllLangues }