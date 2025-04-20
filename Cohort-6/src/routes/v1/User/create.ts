import  {Router, Request, Response} from 'express';
import { User } from '../../../database/models/User';
import UserRepo from '../../../database/repository/userRepo';



const createUserHandler = async (
    req: Request,
    res: Response,
) => {
    try {
        const user = await UserRepo.CreateUser(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.send((error as Error).message)
    }
}
export default createUserHandler