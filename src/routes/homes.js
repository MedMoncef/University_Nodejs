import express from "express";
const router = express.Router();
import Home from '../model/Home';


//-------crud start--------------

 

//------------end----------------------------------


//-----------------router page---------------------
router.get("/", async (req, res) => {
        let homes = await Home.find();
        return res.render("pages/home", {homes});
})

/* --- Login --- */
router.get("/login", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/login/login", {homes});
})
router.get("/join", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/login/join", {homes});
})
/* --- I.F.I.C--- */
export default router;