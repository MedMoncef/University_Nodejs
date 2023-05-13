import express from "express";
const router = express.Router();
import { createData, getAllData,getAllDatas,deleteData,updateData } from '../controllers/logins';

router.post("/data", createData)
router.get("/data", getAllData)
router.get("/datas", getAllDatas)
router.put("/data/:id", deleteData)
router.delete("/datas/:id", updateData)

export default router;