import mongoose from "mongoose";
const { Schema } = mongoose;

const nhistoireSchema = new Schema({
    anne: String,
    titre:String,
    text:String,

})

const Nhistoire = mongoose.model("Nhistoire", nhistoireSchema);
export default Nhistoire;