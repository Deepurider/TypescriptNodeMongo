import { Router } from "express";
import { getUsers, registerUser } from "../controllers/user.controller";

const router = Router();

router.route("/").get(getUsers);
router.route("/register").post(registerUser);

export default router;
