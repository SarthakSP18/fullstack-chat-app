import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    // console.log("URI length:", process.env.MONGODB_URI.length);
    // console.log(conn);
    

  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
