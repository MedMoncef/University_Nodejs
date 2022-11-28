import mongoose from "mongoose";
const { Schema } = mongoose;

const diplomeSchema = new Schema({
    image: String,
    titreD: String,
    TextD: String,
    diplome: String,
    imagedip: String,
})

const Diplome = mongoose.model("Diplome", diplomeSchema);
export default Diplome;