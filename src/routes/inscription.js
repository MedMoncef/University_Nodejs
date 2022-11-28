import express from "express";
const router = express.Router();
import { createInscription, getAllInscription,getAllInscriptions,deleteInscription,updateInscription} from '../controllers/inscriptions';

router.post("/inscription", createInscription)
router.get("/inscription", getAllInscription)
router.get("/inscriptions", getAllInscriptions)
router.put("/inscriptions/:id", deleteInscription)
router.delete("/inscriptions/:id", updateInscription)

export default router;