import express from "express";
const router = express.Router();
import { createDiplome, getAllDiplome,deleteDiplome,updateDiplome,getAllDiplomes} from '../controllers/diplomes';

router.post("/diplomes", createDiplome)
router.get("/diplome", getAllDiplome)
router.get("/diplomes", getAllDiplomes)
router.put("/diplome/:id", updateDiplome)
router.delete("/diplomes/:id", deleteDiplome )

export default router;