import * as fs from "fs";
import * as path from "path";
import IUserRepository, {
    CreateUserPort,
    GetUserByEmailPort
} from "../../../../application/user/secondary/IUser.repository";
import User from "../../../../domain/user/class/user";
import { UserProps } from "../../../../domain/user/type";
import { UserByEmailNotFoundError } from "../../../../error/UserByEmailNotFoundError";

const PATH = path.join(__dirname, "./store.txt");

class FileSystemUserRepository implements IUserRepository {
    private _users: Array<UserProps>;

    constructor() {
        this._users = this.getPersistedUsers();
    }

    private getPersistedUsers(): Array<UserProps> {
        const content = fs.readFileSync(PATH).toString();

        // TODO check the content is ok
        return content ? JSON.parse(content) : [];
    }

    private async persistUsers(users: Array<UserProps>): Promise<void> {
        try {
            fs.writeFileSync(PATH, JSON.stringify(users));
        } catch (error) {
            throw new Error(`user.repository persistUsers: error when write file ${error}`);
        }
    }

    public getUserByEmail(port: GetUserByEmailPort): Promise<User> {
        const { email } = port;
        const user = this._users.find((props: UserProps) => props.email === email);
        if (!user) throw new UserByEmailNotFoundError();

        return Promise.resolve(new User(user));
    }

    public getUsers(): Promise<Array<User>> {
        return Promise.resolve(this._users.map((props: UserProps) => new User(props)));
    }

    public createUser(port: CreateUserPort): Promise<void> {
        this._users.push(port);
        return Promise.resolve();
    }
}

export default FileSystemUserRepository;
