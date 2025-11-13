import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
import { DeleteCategoryController } from "../controllers/category/DeleteCategoryController";

const create = new CreateCategoryController().handle;
const list = new ListCategoryController().handle;
const remove = new DeleteCategoryController().handle;

const categoryRoutes = Router();

categoryRoutes.get("/", list);
categoryRoutes.post("/", create);
categoryRoutes.delete("/:id", remove);

export { categoryRoutes };
