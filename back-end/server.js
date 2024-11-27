import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import foodRouter from "./router/foodRouter.js";

const server = express();
server.use(cors());
const PORT = 8000;
server.use("/api", userRouter);
server.use("/api", foodRouter);

mongoose.connect(
  "mongodb+srv://tuwshuk13:99534102tuv@cluster0.h79bf.mongodb.net/sample_mflix"
);
server.listen(PORT, (req, res) => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
