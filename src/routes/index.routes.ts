import { Router } from "express";
import userRoutes from "./controllers/user.routes";

const router = Router();
// controller routes
router.use('/users', userRoutes);

// Other Routes

export default router;
