import mongoose from "mongoose";
const { Schema } = mongoose;

const etudiantSchema = new Schema({
    titrePs: String,
    titreP: String,
    text1: String,
    text2: String,
    Text3: String,
    Text4: String
})

const Etudiant = mongoose.model("Etudiant", etudiantSchema);
export default Etudiant;