import express from "express";
const router = express.Router();
import { createBourse, getAllBourse,deleteBourse,updateBourse,getAllBourses} from '../controllers/bourses';

router.post("/bourses", createBourse)
router.get("/bourse", getAllBourse)
router.get("/bourses", getAllBourses)
router.put("/bourse/:id", updateBourse)
router.delete("/bourses/:id", deleteBourse )

export default router;