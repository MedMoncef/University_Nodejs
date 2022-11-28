import mongoose from "mongoose";
const { Schema } = mongoose;

const langue_mainSchema = new Schema({
    titrelm: String,
    textlm: String,
    linklm: String,
})

const langue_main = mongoose.model("langue_main", langue_mainSchema);
export default langue_main;