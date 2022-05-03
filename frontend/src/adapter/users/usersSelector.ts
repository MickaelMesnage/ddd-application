import User from "domain/user";
import { RootState } from "../redux/store";

export const getUsersSelector = (state: RootState): Array<User> => {
    return state.users.value;
};
