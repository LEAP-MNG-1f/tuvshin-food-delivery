import express from "express";
import { createUser, getAllUser } from "../Controller/userController.js";

const userRouter = express.Router();
userRouter.get("/foodinformation", getAllUser);
userRouter.post("/foodinformation", createUser);

export default userRouter;
