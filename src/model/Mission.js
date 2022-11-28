import mongoose from "mongoose";
const { Schema } = mongoose;

const nmissionSchema = new Schema({
    titre:String,
    text1:String,
    text2:String,
    text3:String,
    text4:String,
})
const Nmission = mongoose.model("Nmission", nmissionSchema);
export default Nmission;