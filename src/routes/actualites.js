import express from "express";
const router = express.Router();
import { createActualite, getAllActualite,deleteActualite,updateActualite,getAllActualites } from '../controllers/actualites';

router.post("/actualite", createActualite)
router.get("/actualites", getAllActualite)
router.get("/actualite", getAllActualites)
router.put("/actualite/:id", updateActualite)
router.delete("/actualite/:id", deleteActualite )

export default router;