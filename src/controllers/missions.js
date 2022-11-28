import Mission from '../model/Mission'

const createNmission = async (req, res) => {
    const missions = await Mission.create(req.body)
    return res.send(missions)
}

const getAllNmissions = async (req, res) => {
    const missions = await Mission.find()
    return res.render("pages/ific/mission",{missions})
}

const getAllNmission = async (req, res) => {
    const missions = await Mission.find()
    return res.send(missions)
}

const deleteNmission = async (req, res) => {
    const missions = await Mission.findByIdAndDelete(req.params.id);
    return res.send(missions);
}

const updateNmission = async (req, res) => {
    const missions = await Mission.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(missions);
}

export { createNmission, getAllNmission,deleteNmission,updateNmission,getAllNmissions }