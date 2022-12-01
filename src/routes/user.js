import express from "express";
const router = express.Router();
import { createUser, getAllUser,getAllUsers,deleteUser,updateUser} from '../controllers/users';

router.post("/user", createUser)
router.get("/user", getAllUser)
router.get("/users", getAllUsers)
router.put("/user/:id", deleteUser)
router.delete("/users/:id", updateUser)

export default router;