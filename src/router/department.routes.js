import { Router } from "express";
import department from "../controllers/departmentContr.js";


const depRouter = Router();

depRouter.get("/departments", department.GET);
depRouter.post("/departments", department.POST);
depRouter.put("/departments/:id", department.PUT);
depRouter.delete("/departments/:id", department.DELETE);


export default depRouter