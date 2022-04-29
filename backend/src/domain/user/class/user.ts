import { v4 as uuidv4 } from "uuid";
import { UserEmail, UserId, UserProfile, UserProps } from "../type";

class User {
    private _profile: UserProfile;
    private readonly _email: UserEmail;
    private readonly _id: UserId;

    constructor(userProps: UserProps) {
        this._id = userProps.id || uuidv4();
        this._email = userProps.email;
        this._profile = userProps.profile || UserProfile.USER;
    }

    get id(): UserId {
        return this._id;
    }

    get email(): UserEmail {
        return this._email;
    }

    get profile(): UserProfile {
        return this._profile;
    }

    public isAdmin(): boolean {
        return UserProfile.ADMIN === this._profile;
    }
}

export default User;
