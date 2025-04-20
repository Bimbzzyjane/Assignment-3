import { Router } from "express";
import UserRoutes from "./v1/User";


const router = Router();

router.use('/user', UserRoutes);

export default router;