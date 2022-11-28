import Histoire from '../model/Nhistoire'

const createNhistoire = async (req, res) => {
    const histoires = await Histoire.create(req.body)
    return res.send(histoires)
}

const getAllNhistoires = async (req, res) => {
    const histoires = await Histoire.find()
    return res.render("pages/ific/histoire",{histoires})
}

const getAllNhistoire = async (req, res) => {
    const histoires = await Histoire.find()
    return res.send(histoires)
}

const deleteNhistoire = async (req, res) => {
    const histoires = await Histoire.findByIdAndDelete(req.params.id);
    return res.send(histoires);
}

const updateNhistoire = async (req, res) => {
    const histoires = await Histoire.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(histoires);
}

export { createNhistoire, getAllNhistoire,deleteNhistoire,updateNhistoire,getAllNhistoires }