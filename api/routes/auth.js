import express from "express";
const router = express.Router();

import {login, logout,register} from "../controllers/auth.js";

router.post("/login",login);
router.post("/register",register);
router.post("/logout", logout);

export default router;
