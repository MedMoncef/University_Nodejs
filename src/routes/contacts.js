import express from "express";
const router = express.Router();
import  {createContact, getAllContacts,getAllContact,deleteContact,updateContact} from '../controllers/contacts';

router.post("/contacts", createContact)
router.get("/allcontacts", getAllContacts)
router.get("/contact", getAllContact)
router.delete("/contacts/:id", deleteContact)
router.put("/contact/:id", updateContact)


export default router;