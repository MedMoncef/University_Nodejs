import express from "express";
const router = express.Router();
import { createLogin, getAllLogin } from '../controllers/logins';

router.post("/login", createLogin)
router.get("/login", getAllLogin)

export default router;