import User from "../../../domain/user/class/user";
import { UserEmail, UserId, UserProfile } from "../../../domain/user/type";

export type UserPresented = {
    email: UserEmail;
    isAdmin: boolean;
    id: UserId;
};

class UserPresenter {
    static present(user: User): UserPresented {
        return {
            email: user.email,
            isAdmin: user.profile === UserProfile.ADMIN,
            id: user.id
        };
    }
}

export default UserPresenter;
