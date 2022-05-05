import { UserEmail, UserId, UserProfile } from "../../../domain/user/type";
import User from "../../../domain/user/class/user";

export type GetUserByEmailPort = {
    email: UserEmail;
};

export type CreateUserPort = {
    email: UserEmail;
    profile: UserProfile;
    id: UserId;
};

interface IUserRepository {
    getUsers(): Promise<Array<User>>;
    getUserByEmail(port: GetUserByEmailPort): Promise<User>;
    createUser(port: CreateUserPort): Promise<void>;
}

export default IUserRepository;
