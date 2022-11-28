import mongoose from "mongoose";
const { Schema } = mongoose;

const InscriptionSchema = new Schema({
    username: String,
    tel: String,
    email: String,
    password: String,
    diplome : String,
    niveau: String,
    message: String,
})

const Inscription = mongoose.model("Inscription", InscriptionSchema);
export default Inscription;