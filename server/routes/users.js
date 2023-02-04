import pkg from 'express';
const express = pkg;
import {
    getUser,
    getUserFriends,
    addRemoveFriend, 
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// creating read routes 
// this is called a query string user/:id
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// update user route
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;