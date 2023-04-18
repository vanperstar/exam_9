import { Router } from "express";
import outlay from "../controllers/incomeContr.js";


const outRouter = Router();

outRouter.get("/outlays", outlay.GET);
outRouter.get("/outlays/:id", outlay.GET);
outRouter.post("/outlays", outlay.POST);
outRouter.put("/outlays/:id", outlay.PUT);
outRouter.delete("/outlays/:id", outlay.DELETE);


export default outRouter