import { Router } from "express";
import centers from "../controllers/centerContr.js";


const centerRouter = Router();

centerRouter.get("/centers", centers.GET);
centerRouter.post("/centers", centers.POST);


export default centerRouter