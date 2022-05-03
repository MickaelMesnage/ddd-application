export type UserEmail = string;

export type UserLogin = string;

export type UserIsAdmin = boolean;

export type UserId = string;

type User = {
    id: UserId;
    email: UserEmail;
    isAdmin: UserIsAdmin;
};

export default User;
