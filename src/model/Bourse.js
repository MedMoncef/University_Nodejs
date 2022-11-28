import mongoose from "mongoose";
const { Schema } = mongoose;

const bourseSchema = new Schema({
    titreP: String,
    text1: String,
})

const Bourse = mongoose.model("Bourse", bourseSchema);
export default Bourse;