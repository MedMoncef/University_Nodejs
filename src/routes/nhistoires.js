import express from "express";
const router = express.Router();
import { createNhistoire, getAllNhistoire,deleteNhistoire,updateNhistoire,getAllNhistoires} from '../controllers/nhistoires';

router.post("/nhistoires", createNhistoire)
router.get("/nhistoires", getAllNhistoire)
router.get("/notre_histoire", getAllNhistoires)
router.put("/nhistoire/:id", updateNhistoire)
router.delete("/nhistoire/:id", deleteNhistoire )

export default router;