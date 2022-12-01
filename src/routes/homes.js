import express from "express";
const router = express.Router();
import Home from '../model/Home';

router.get("/", async (req, res) => {
        let homes = await Home.find();
        return res.render("pages/home", {homes});
})

export default router;