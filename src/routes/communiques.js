import express from "express";
const router = express.Router();
import  {createcommuniques, getAllcommuniques,deletecommuniques,updatecommuniques,getAllcommunique} from '../controllers/communiques';

router.post("/communiques", createcommuniques)
router.get("/COMMUNIQUES_DE_PRESSE", getAllcommuniques)
router.get("/communiques", getAllcommunique)
router.delete("/communiquesdel/:id", deletecommuniques)
router.put("/communiquesup/:id", updatecommuniques)


export default router;