import { Router } from "express";
import { getPosts, deletePosts } from "../controllers/posts.js";
const router = Router();

router.get("/", getPosts);
router.delete("/", deletePosts);

export default router;
