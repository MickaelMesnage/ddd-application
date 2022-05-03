import User from "domain/user";
import { GET } from "../fetch";

type GetUsersInput = void;

type GetUsersOutput = {
    users: Array<User>;
};

const getUsers = async (): Promise<Array<User>> => {
    const { users } = await GET<GetUsersInput, GetUsersOutput>(
        `${process.env.REACT_APP_API_URL}user/list`
    );

    return users;
};

export default getUsers;
