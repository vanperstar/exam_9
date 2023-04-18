import { Router } from "express";
import income from "../controllers/incomeContr.js";


const incRouter = Router();

incRouter.get("/incomes", income.GET);
incRouter.get("/incomes/:id", income.GET);
incRouter.post("/incomes", income.POST);
incRouter.put("/incomes/:id", income.PUT);
incRouter.delete("/incomes/:id", income.DELETE);


export default incRouter