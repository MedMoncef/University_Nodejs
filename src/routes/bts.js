import express from "express";
const router = express.Router();
import { createBTS, getAllBTS,deleteBTS,updateBTS,getAllBTSs} from '../controllers/BTSs';

router.post("/btss", createBTS)
router.get("/btss", getAllBTS)
router.get("/bts", getAllBTSs)
router.put("/bts/:id", updateBTS)
router.delete("/btss/:id", deleteBTS )

export default router;