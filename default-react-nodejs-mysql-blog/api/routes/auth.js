import express from "express";

import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

/*
Router setup for Authentication using methods from controller auth.js.
Functionalities: registration, logging, logging out.
*/

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router;
