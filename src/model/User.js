import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
	email: String,
	username: String,
	password: String,
	passwordConf: String,
    diplome : String,
    niveau: String,
    message: String,
});

const User = mongoose.model("User", userSchema);
export default User;