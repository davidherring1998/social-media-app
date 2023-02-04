import  pkg  from "express";
const express = pkg;
import {login} from '../controllers/auth.js';

const router = express.Router();

// "auth/login" <- auth is defined in index.js
router.post("/login", login);

export default router;