import User from "../../../domain/user/class/user";
import { UserEmail, UserProfile } from "../../../domain/user/type";

export type UserPresented = {
    email: UserEmail;
    profile: UserProfile;
};

class UserPresenter {
    static present(user: User): UserPresented {
        return {
            email: user.email,
            profile: user.profile
        };
    }
}

export default UserPresenter;
