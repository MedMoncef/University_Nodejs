import express from "express";
const router = express.Router();
import { createHeber, getAllHeber,deleteHeber,updateHeber,getAllHebers} from '../controllers/hebers';

router.post("/hebers", createHeber)
router.get("/hebergement", getAllHeber)
router.get("/hebers", getAllHebers)
router.put("/heber/:id", updateHeber)
router.delete("/hebers/:id", deleteHeber)

export default router;