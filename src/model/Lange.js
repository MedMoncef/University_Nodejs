import mongoose from "mongoose";
const { Schema } = mongoose;

const langeSchema = new Schema({
    titrel: String,
    niveau1:String,
    niveau2:String,
    niveau3:String,
})

const Lange = mongoose.model("Lange", langeSchema);
export default Lange;