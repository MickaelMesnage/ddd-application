import User, { UserEmail, UserIsAdmin } from "domain/user";
import { POST } from "../fetch";

type AddUserInput = {
    email: UserEmail;
    isAdmin: UserIsAdmin;
};

type AddUserOutput = {
    users: Array<User>;
};

const addUser = async (input: AddUserInput): Promise<Array<User>> => {
    const { users } = await POST<AddUserInput, AddUserOutput>(
        `${process.env.REACT_APP_API_URL}user`,
        input
    );

    return users;
};

export default addUser;
