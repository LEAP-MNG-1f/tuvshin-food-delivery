import express from "express";
import {
  createFoodData,
  getAllFoodData,
} from "../Controller/foodController.js";

const foodRouter = express.Router();
foodRouter.get("/foods", getAllFoodData);
foodRouter.post("/fooddata", createFoodData);

export default foodRouter;
