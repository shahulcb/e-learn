import mongoose from "mongoose";

export const connectDatabase = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
