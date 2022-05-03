import User from "domain/user";
import { POST } from "../fetch";

type MeOutput = {
    user?: User;
};

const me = async (): Promise<User | undefined> => {
    const { user } = await POST<void, MeOutput>(`${process.env.REACT_APP_API_URL}auth/me`);

    return user;
};

export default me;
