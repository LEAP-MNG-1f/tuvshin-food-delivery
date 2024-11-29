import express from "express";
import {
  createcategory,
  getAllCategory,
} from "../Controller/categoryController.js";

const categoryRouter = express.Router();
categoryRouter.get("/get-category", getAllCategory);
categoryRouter.post("/category", createcategory);

export default categoryRouter;
