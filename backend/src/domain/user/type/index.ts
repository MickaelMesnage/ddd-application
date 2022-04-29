export type UserEmail = string;

export type UserId = string;

export enum UserProfile {
    ADMIN = "ADMIN",
    USER = "USER"
}

export type UserProps = {
    email: UserEmail;
    id?: UserId;
    profile?: UserProfile;
};
