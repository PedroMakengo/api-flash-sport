import { Router } from "express";
import { CreatePostController } from "../controllers/post/CreatePostController";
import { ListPostController } from "../controllers/post/ListPostController";
import { ListPostBySlugController } from "../controllers/post/ListPostBySlugController";
import { DeletePostController } from "../controllers/post/DeletePostController";

const create = new CreatePostController().handle;
const list = new ListPostController().handle;
const show = new ListPostBySlugController().handle;
const remove = new DeletePostController().handle;

const postRoutes = Router();

postRoutes.get("/", list);
postRoutes.get("/:slug", show);
postRoutes.delete("/:id", remove);
postRoutes.post("/", create);

export { postRoutes };
