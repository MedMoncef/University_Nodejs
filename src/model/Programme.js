import mongoose from "mongoose";
const { Schema } = mongoose;

const programmeSchema = new Schema({
    titrePs: String,
    titreP: String,
    text1: String,
    text2: String,
    Text3: String
})

const Programme = mongoose.model("Programme", programmeSchema);
export default Programme;