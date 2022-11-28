import mongoose from "mongoose";
const { Schema } = mongoose;

const financeSchema = new Schema({
    titrePs: String,
    titreP: String,
    text1: String,
    text2: String,
    Text3: String
})

const Finance = mongoose.model("Finance", financeSchema);
export default Finance;