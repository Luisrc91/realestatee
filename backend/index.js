import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { get } from "http";
import userRouter from "./routes/user.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connect to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("listening on 30000");
});

app.use('/api/user', userRouter);



