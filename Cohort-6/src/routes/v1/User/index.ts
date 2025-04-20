import { Router } from "express";
import createUserHandler from "./create";

const UserRoutes = Router();

UserRoutes.post('/create', createUserHandler);

export default UserRoutes;