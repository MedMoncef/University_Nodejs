import Finance from '../model/Finance'

const createFinance = async (req, res) => {
    const finances = await Finance.create(req.body)
    return res.send(finances)
}

const getAllFinance = async (req, res) => {
    const finances = await Finance.find()
    return res.render("pages/admission/financement",{finances})
}

const getAllFinances = async (req, res) => {
    const finances = await Finance.find()
    return res.send(finances)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteFinance = async (req, res) => {
    const finances = await Finance.findByIdAndDelete(req.params.id);
    return res.send(finances);
}

const updateFinance = async (req, res) => {
    const finances = await Finance.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(finances);
}

export { createFinance, getAllFinance,deleteFinance,updateFinance,getAllFinances }