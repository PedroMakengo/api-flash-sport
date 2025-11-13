import { Router } from "express";
import { CreatePostController } from "../controllers/post/CreatePostController";
import { ListPostController } from "../controllers/post/ListPostController";

const create = new CreatePostController().handle;
const list = new ListPostController().handle;

const postRoutes = Router();

postRoutes.get("/", list);
postRoutes.post("/", create);

export { postRoutes };
