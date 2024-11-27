import express from "express";
import { createUser, getAllUser } from "../Controller/userController.js";

const userRouter = express.Router();
userRouter.get("/user", getAllUser);
userRouter.post("/user", createUser);

export default userRouter;
