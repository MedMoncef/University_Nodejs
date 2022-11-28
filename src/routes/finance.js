import express from "express";
const router = express.Router();
import { createFinance, getAllFinance,deleteFinance,updateFinance,getAllFinances} from '../controllers/finances';

router.post("/finances", createFinance)
router.get("/financement", getAllFinance)
router.get("/finances", getAllFinances)
router.put("/finance/:id", updateFinance)
router.delete("/finances/:id", deleteFinance )

export default router;