import express from "express";
const router = express.Router();
import { createNmission, getAllNmission,deleteNmission,updateNmission,getAllNmissions } from '../controllers/missions';

router.post("/nmission", createNmission)
router.get("/nmission", getAllNmission)
router.get("/notre_mission", getAllNmissions)
router.put("/nmission/:id", updateNmission)
router.delete("/nmission/:id", deleteNmission )

export default router;