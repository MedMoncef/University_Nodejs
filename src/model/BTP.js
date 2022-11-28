import mongoose from "mongoose";
const { Schema } = mongoose;

const BTPSchema = new Schema({
    titrebtp: String,
    niveau1:String,
    niveau2:String,
    niveau3:String,
})

const BTP = mongoose.model("BTP", BTPSchema);
export default BTP;