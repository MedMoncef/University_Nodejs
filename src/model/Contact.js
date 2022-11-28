import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactsSchema = new Schema({
    name: String,
    email: String,
    number: Number,
    message: String
})

const Contact = mongoose.model("Contacts", ContactsSchema);
export default Contact;