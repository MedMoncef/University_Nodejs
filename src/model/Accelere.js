import mongoose from "mongoose";
const { Schema } = mongoose;

const AccelereSchema = new Schema({
    titreA: String,
    text1: String,
    text2: String,
    text3: String,
    text4: String,
    text5: String,
    text6: String,
    text7: String,
    text8: String,
    text9: String,
})

const Accelere = mongoose.model("Accelere", AccelereSchema);
export default Accelere;