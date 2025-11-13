import { Router } from "express";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";
import { postRoutes } from "./post";
import { categoryRoutes } from "./category";

import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
// router.use("/department", authenticateToken, departmentRoutes);

router.use("/post", postRoutes);
router.use("/category", categoryRoutes);

export { router };
