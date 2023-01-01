import express from "express";

import { addPost } from "../controllers/post.js";

const router = express.Router();

/*
Router setup for Post Page using method from controller post.js
*/

router.get("/test", addPost);

export default router;
