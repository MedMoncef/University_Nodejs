import express from "express";
const router = express.Router();
import { createAccelere, getAllAccelere,getAllAcceleres,deleteAcceleree,updateAccelere} from '../controllers/acceleres';

router.post("/newacc", createAccelere)
router.get("/acc", getAllAccelere)
router.get("/formations_accelerees", getAllAcceleres)
router.put("/acceleres/:id", deleteAcceleree)
router.delete("/acceleres/:id", updateAccelere )

export default router;