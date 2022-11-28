import mongoose from "mongoose";
const { Schema } = mongoose;

const formationSchema = new Schema({
    image: String,
    titreF: String,
    textF: String,
    formations: String,
})

const Formation = mongoose.model("Formation", formationSchema);
export default Formation;