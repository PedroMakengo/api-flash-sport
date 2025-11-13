import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";

const create = new CreateCategoryController().handle;
const list = new ListCategoryController().handle;

const categoryRoutes = Router();

categoryRoutes.get("/", list);
categoryRoutes.post("/", create);

export { categoryRoutes };
