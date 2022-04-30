import User, { UserEmail } from "domain/user";
import { POST } from "../fetch";

type LoginInput = {
    email: UserEmail;
};

type LoginOutput = {
    user: User;
};

const login = async (email: UserEmail): Promise<User> => {
    const { user } = await POST<LoginInput, LoginOutput>(
        `${process.env.REACT_APP_API_URL}user/login`,
        { email }
    );

    return user;
};

export default login;
