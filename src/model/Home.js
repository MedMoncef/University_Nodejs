import mongoose from "mongoose";
const { Schema } = mongoose;

const homeSchema = new Schema({
    name: String,
    image: String,
    description: String
})

const Home = mongoose.model("Home", homeSchema);
export default Home;