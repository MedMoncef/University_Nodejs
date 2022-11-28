import express from "express";
const router = express.Router();
import { createEtudiant, getAllEtudiant,deleteEtudiant,updateEtudiant,getAllEtudiants} from '../controllers/etudiants';

router.post("/etudiants", createEtudiant)
router.get("/etudiant", getAllEtudiant)
router.get("/etudiants", getAllEtudiants)
router.put("/etudiant/:id", updateEtudiant)
router.delete("/etudiants/:id", deleteEtudiant )

export default router;