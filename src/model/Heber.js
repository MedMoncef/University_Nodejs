import mongoose from "mongoose";
const { Schema } = mongoose;

const heberSchema = new Schema({
    titreP: String,
    text1: String,
    text2: String,
    text3: String
})

const Heber = mongoose.model("Heber", heberSchema);
export default Heber;