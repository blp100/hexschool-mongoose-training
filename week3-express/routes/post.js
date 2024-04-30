import { Router } from "express";
import { createPost, deletePost, updatePost } from "../controllers/post.js";
const router = Router();

router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
