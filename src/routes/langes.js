import express from "express";
const router = express.Router();
import { createLange, getAllLange,deleteLange,updateLange,getAllLanges} from '../controllers/langes';

router.post("/langes", createLange)
router.get("/langes", getAllLange)
router.get("/lange", getAllLanges)
router.put("/lange/:id", updateLange)
router.delete("/langes/:id", deleteLange )

export default router;