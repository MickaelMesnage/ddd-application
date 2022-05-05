export type UserEmail = string;

export type UserId = string;

export type UserIsAdmin = boolean;

export enum UserProfile {
    ADMIN = "ADMIN",
    USER = "USER"
}

export type UserProps = {
    email: UserEmail;
    id?: UserId;
    profile?: UserProfile;
};
