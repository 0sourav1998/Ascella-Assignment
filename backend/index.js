import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectToDB } from "./db/config.js";
import bookRouter from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser"

import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 4000;
const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
connectToDB();


app.use("/api/v1", bookRouter);
app.use("/api/v1", userRouter);


app.listen(PORT, () => {
  console.log(`Port is listening to PORT ${PORT}`);
});
