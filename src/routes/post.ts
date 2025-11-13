import { Router } from "express";
import { CreatePostController } from "../controllers/post/CreatePostController";
import { ListPostController } from "../controllers/post/ListPostController";
import { ListPostBySlugController } from "../controllers/post/ListPostBySlugController";

const create = new CreatePostController().handle;
const list = new ListPostController().handle;
const show = new ListPostBySlugController().handle;

const postRoutes = Router();

postRoutes.get("/", list);
postRoutes.get("/:slug", show);
postRoutes.post("/", create);

export { postRoutes };
