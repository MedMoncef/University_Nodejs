import express from "express";
const router = express.Router();
import { createLogin, getAllLogin,getAllLogins,deleteLogin,updateLogin } from '../controllers/logins';

router.post("/login", createLogin)
router.get("/login", getAllLogin)
router.get("/logins", getAllLogins)
router.put("/logins/:id", deleteLogin)
router.delete("/logins/:id", updateLogin)

export default router;