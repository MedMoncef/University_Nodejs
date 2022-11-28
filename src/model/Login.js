import mongoose from "mongoose";
const { Schema } = mongoose;

const LoginSchema = new Schema({
    email: String,
    password: String,
})

const Login = mongoose.model("Login", LoginSchema);
export default Login;