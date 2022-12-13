import express from "express";
const router = express.Router();
import Home from '../model/Home';

router.get("/", async (req, res) => {
        let homes = await Home.find();
        return res.render("pages/home", {homes});
})
/* --- NavTel--- */

router.get("/cours", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/cours", {homes});
})
router.get("/addmiss", async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/admiss", {homes});
})
router.get("/IFIC",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/ific", {homes});
})
router.get("/press",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/navtel/press", {homes});
})
/* --- formation office --------*/
router.get("/Access",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/office/access", {homes});
})
router.get("/Excel",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/office/excel", {homes});
})
router.get("/Word",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/office/word", {homes});
})
router.get("/Powerpoint",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/office/Powerpoint", {homes});
})
router.get("/Outlook",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/office/outlook", {homes});
})
/* --- formation programation -------*/
router.get("/Initiation_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic", {homes});
})
router.get("/Perfectionnement_C",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc", {homes});
})
router.get("/Initiation",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ic+", {homes});
})
router.get("/Perfectionnement",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pc+", {homes});
})
router.get("/VB.Net",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/vb", {homes});
})
router.get("/Initiation_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/ijava", {homes});
})
router.get("/Perfectionnement_JAVA",async (req, res)=>{
        let homes = await Home.find();
        return res.render("pages/formation/programmation/pjava", {homes});
})
export default router;