import User from "../../../domain/user/class/user";
import UserPresenter, { UserPresented } from "./user.presenter";

export type UsersPresented = Array<UserPresented>;

class UsersPresenter {
    static present(users: Array<User>): UsersPresented {
        return users.map((user) => UserPresenter.present(user));
    }
}

export default UsersPresenter;
