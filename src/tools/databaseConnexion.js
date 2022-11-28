import mongoose from "mongoose";

const databaseConnexion = () => {
    mongoose.connect(
        `mongodb://localhost:27017/${process.env.DATABASE_NAME}`,
        { useNewUrlParser: true }
    );
    mongoose.connection.on("error", err => {
        console.log("MongoDB connection error: ", err);
    });
}

export default databaseConnexion