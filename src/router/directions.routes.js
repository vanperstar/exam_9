import { Router } from "express";
import direction from "../controllers/directionContr.js";


const dirRouter = Router();

dirRouter.get("/departments/directions", direction.GET);
dirRouter.get("/departments/directions/:id", direction.GET);
dirRouter.post("/directions", direction.POST);
dirRouter.put("/directions/:id", direction.PUT);
dirRouter.delete("/directions/:id", direction.DELETE);


export default dirRouter