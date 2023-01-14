import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
    message: String,
});

const User = mongoose.model("User", userSchema);
export default User;