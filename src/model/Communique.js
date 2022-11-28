import mongoose from "mongoose";
const { Schema } = mongoose;

const CommuniqueSchema = new Schema({
    titreA: String,
    image: String
})

const Communique = mongoose.model("Communique", CommuniqueSchema);
export default Communique;