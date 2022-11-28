import express from "express";
const router = express.Router();
import { createLangue, getAllLangue,deleteLangue,updateLangue,getAllLangues} from '../controllers/langue_main';

router.post("/langues_main", createLangue)
router.get("/langues_main", getAllLangue)
router.get("/langue_main", getAllLangues)
router.put("/langue_main/:id", updateLangue)
router.delete("/langues_main/:id", deleteLangue )

export default router;