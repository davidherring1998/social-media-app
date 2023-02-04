import pkg from 'express';
const express = pkg;
import { getFeedPost, getUserPosts, likePost } from '../controllers/post.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPost);
router.get("/:user/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);

export default router; 