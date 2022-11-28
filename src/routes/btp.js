import express from "express";
const router = express.Router();
import { createBTP, getAllBTP,deleteBTP,updateBTP,getAllBTPs} from '../controllers/BTPs';

router.post("/btps", createBTP)
router.get("/btps", getAllBTP)
router.get("/btp", getAllBTPs)
router.put("/btp/:id", updateBTP)
router.delete("/btps/:id", deleteBTP )

export default router;