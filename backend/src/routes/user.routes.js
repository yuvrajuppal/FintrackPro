import { Router } from "express";
import { signupController, loginController, checkIsLoggedInController, updateUserController } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/check", checkIsLoggedInController);
router.patch("/update", updateUserController);

export default router;
