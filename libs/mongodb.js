import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoDB;