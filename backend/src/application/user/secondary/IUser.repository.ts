import { UserEmail } from "../../../domain/user/type";
import User from "../../../domain/user/class/user";

export type GetUserByEmailPort = {
    email: UserEmail;
};

interface IUserRepository {
    getUsers(): Promise<Array<User>>;
    getUserByEmail(port: GetUserByEmailPort): Promise<User>;
}

export default IUserRepository;
