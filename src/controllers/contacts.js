import Contact from '../model/Contact'

const createContact = async (req, res) => {
    const contacts = await Contact.create(req.body)
    return res.send(contacts)
}

const getAllContact = async (req, res) => {
    const contacts = await Contact.find()
    return res.render("pages/contact",{contacts})
}

const getAllContacts = async (req, res) => {
    const contacts = await Contact.find()
    return res.send(contacts)
}

/* const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const langes = await Lange.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(langes)
} */

const deleteContact = async (req, res) => {
    const contacts = await Contact.findByIdAndDelete(req.params.id);
    return res.send(contacts);
}

const updateContact = async (req, res) => {
    const contacts = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(contacts);
}

export { createContact, getAllContacts,getAllContact,deleteContact,updateContact }