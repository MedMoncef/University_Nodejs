import mongoose from "mongoose";
const { Schema } = mongoose;

const InscriptionSchema = new Schema({
    username: String,
    tel: {
        type: Integer,
        required: true,
        unique: true,
    },
    email:  {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    passwordResetCode: {
        data: String,
        expiresAt: Date,
    },
    diplome : String,
    niveau: String,
    message: String,
});

const Inscription = mongoose.model("Inscription", InscriptionSchema);
export default Inscription;