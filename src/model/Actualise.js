import mongoose from "mongoose";
const { Schema } = mongoose;

const ActualiteSchema = new Schema({
    image: String
})

const Actualite = mongoose.model("Actualite", ActualiteSchema);
export default Actualite;