import { Router } from "express";
import userRoutes from "./controllers/user.routes";
import authRoutes from "./controllers/auth.routes";
import { authorize } from "../middlewares/authorize";

const router = Router();
// controller routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

// Other Routes

export default router;
