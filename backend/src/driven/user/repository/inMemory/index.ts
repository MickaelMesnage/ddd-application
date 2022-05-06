import IUserRepository, {
    CreateUserPort,
    GetUserByEmailPort
} from "../../../../application/user/secondary/IUser.repository";
import User from "../../../../domain/user/class/user";
import { UserEmail, UserProfile } from "../../../../domain/user/type";
import { UserByEmailNotFoundError } from "../../../../error/UserByEmailNotFoundError";

const DEFAULT_USERS = [
    {
        email: "admin@gmail.com",
        profile: UserProfile.ADMIN
    }
];

class InMemoryUserRepository implements IUserRepository {
    private _users: Array<User>;

    constructor() {
        this._users = DEFAULT_USERS.map(
            (user: { email: UserEmail; profile: UserProfile }) =>
                new User({ email: user.email, profile: user.profile })
        );

        console.log(this._users);
    }

    public getUserByEmail(port: GetUserByEmailPort): Promise<User> {
        const { email } = port;
        const user = this._users.find((user: User) => user.email === email);
        if (!user) throw new UserByEmailNotFoundError();

        return Promise.resolve(user);
    }

    public getUsers(): Promise<Array<User>> {
        return Promise.resolve(this._users);
    }

    public createUser(port: CreateUserPort): Promise<void> {
        this._users.push(new User(port));
        return Promise.resolve();
    }
}

export default InMemoryUserRepository;
