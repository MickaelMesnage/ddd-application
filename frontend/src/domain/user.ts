export type UserEmail = string;

export enum UserProfile {
    ADMIN = "ADMIN",
    USER = "USER"
}

type User = {
    email: UserEmail;
    profile: UserProfile;
};

export default User;
