import { Router } from "express";
import user from "../controllers/userContr.js";


const userRouter = Router();

userRouter.get("/users", user.GET);
userRouter.get("/users/:id", user.GET);
userRouter.post("/users", user.POST);
userRouter.put("/users/:id", user.PUT);
userRouter.delete("/users/:id", user.DELETE);
userRouter.post("/users/login", user.LOGIN);


export default userRouter