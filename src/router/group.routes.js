import { Router } from "express";
import group from "../controllers/groupContr.js";


const grRouter = Router();

grRouter.get("/groups", group.GET);
grRouter.get("/groups/:id", group.GET);
grRouter.post("/groups", group.POST);
grRouter.put("/groups/:id", group.PUT);
grRouter.delete("/groups/:id", group.DELETE);


export default grRouter