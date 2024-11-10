import express from "express";
import dontenv from "dotenv";
import { connectDatabase } from "./config/db.js";
import Razorpay from "razorpay";
import cors from "cors";

dontenv.config();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

connectDatabase();

import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
