import express from "express";
const router = express.Router();
import { createProgramme, getAllProgramme,deleteProgramme,updateProgramme,getAllProgrammes} from '../controllers/programmes';

router.post("/programmes", createProgramme)
router.get("/programme", getAllProgramme)
router.get("/programmes", getAllProgrammes)
router.put("/programme/:id", updateProgramme)
router.delete("/programmes/:id", deleteProgramme )

export default router;