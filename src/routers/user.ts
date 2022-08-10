import express from "express";
import UserController from "@/controllers/UserController";

const router = express.Router();
const userController = new UserController();

router.post("/sign-up", userController.signUp);
router.post("/sign-in", userController.signIn);

export default router;
