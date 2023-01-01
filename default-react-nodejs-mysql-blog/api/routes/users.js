import express from "express";

import { userUser } from "../controllers/user.js";

const router = express.Router();

/*
Router setup for User Page using method from controller user.js
*/

router.get("/user", userUser);

export default router;
