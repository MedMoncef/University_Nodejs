import express from "express";
const router = express.Router();
import { createForget, getAllForget } from '../controllers/forgets';

router.post("/forget", createForget)
router.get("/forget", getAllForget)

export default router;