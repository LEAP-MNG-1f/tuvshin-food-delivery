import express from "express";
import { createOrder, getAllOrder } from "../Controller/orderController.js";

const orderRouter = express.Router();
orderRouter.get("/get-order", getAllOrder);
orderRouter.post("/order", createOrder);

export default orderRouter;
