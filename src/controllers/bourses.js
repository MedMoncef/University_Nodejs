import Bourse from '../model/Bourse'

const createBourse = async (req, res) => {
    const bourses = await Bourse.create(req.body)
    return res.send(bourses)
}

const getAllBourses = async (req, res) => {
    const bourses = await Bourse.find()
    return res.render("pages/admission/bours",{bourses})
}

const getAllBourse = async (req, res) => {
    const bourses = await Bourse.find()
    return res.send(bourses)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteBourse = async (req, res) => {
    const bourses = await Bourse.findByIdAndDelete(req.params.id);
    return res.send(bourses);
}

const updateBourse = async (req, res) => {
    const bourses = await Bourse.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(bourses);
}

export { createBourse, getAllBourse,deleteBourse,updateBourse,getAllBourses }