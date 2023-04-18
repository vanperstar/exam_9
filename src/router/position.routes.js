import { Router } from "express";
import positon from "../controllers/positionContr.js";


const posRouter = Router();

posRouter.get("/departments/positons", positon.GET);
posRouter.get("/departments/positons/:id", positon.GET);
posRouter.post("/positons", positon.POST);
posRouter.put("/positons/:id", positon.PUT);
posRouter.delete("/positons/:id", positon.DELETE);


export default posRouter