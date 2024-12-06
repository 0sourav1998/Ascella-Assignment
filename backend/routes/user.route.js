import express from "express";
import { login, signup } from "../controllers/user.controller.js";
const router = express();


router.post("/login",login);
router.post("/signup",signup)


export default router ;