import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import foodRouter from "./router/foodRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import orderRouter from "./router/orderRouter.js";
import bodyParser from "body-parser";

const server = express();
server.use(cors());
server.use(bodyParser.json());
const PORT = 8000;
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);
server.use("/api", orderRouter);

mongoose.connect(
  "mongodb+srv://tuwshuk13:99534102tuv@cluster0.h79bf.mongodb.net/food-db"
);
server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
