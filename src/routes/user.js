import express from "express";
const router = express.Router();
import { createUser, getAllUser } from '../controllers/users';

router.post("/user", createUser)
router.get("/user", getAllUser)

export default router;