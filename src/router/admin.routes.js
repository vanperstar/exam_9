import { Router } from "express";
import admin from "../controllers/adminContr.js";


const adminRouter = Router();

adminRouter.get("/login", admin.GET);
adminRouter.post("/login", admin.LOGIN);


export default adminRouter