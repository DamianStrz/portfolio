import express from "express";

import { userAuth } from "../controllers/auth.js";

const router = express.Router();

/*
Router setup for Authentication using method from controller auth.js
*/

router.get("/auth", userAuth);

export default router;
