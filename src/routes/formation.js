import express from "express";
const router = express.Router();
import { createFormation, getAllFormation,deleteFormation,updateFormation,getAllFormations} from '../controllers/formations';

router.post("/formations", createFormation)
router.get("/formations", getAllFormation)
router.get("/formation", getAllFormations)
router.put("/formation/:id", updateFormation)
router.delete("/formations/:id", deleteFormation )

export default router;