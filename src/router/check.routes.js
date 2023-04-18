import { Router } from "express";
import check from "../controllers/checkContr.js";


const checkRouter = Router();

checkRouter.get("/checks", check.GET);
checkRouter.post("/checks", check.POST);
checkRouter.put("/checks/:id", check.PUT);
checkRouter.delete("/checks/:id", check.DELETE);


export default checkRouter