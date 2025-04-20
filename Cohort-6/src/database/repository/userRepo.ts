import UserModel, {User} from "../models/User";

class UserRepository {
    static CreateUser: (user:User) => Promise<User> = async (body) => {
        const user = await UserModel.create(body);
        return user;
    }

    static getUsers: () => Promise<User[]> = async () => {
        const users = await UserModel.find();
        return users;
    }
    static getUser: (id:string) => Promise<User | null> = async (id) => {
        const user = await UserModel.findById(id);
        return user;
    }
}

export default UserRepository;