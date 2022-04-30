import User from "domain/user";
import { RootState } from "../redux/store";

export const getConnectedUserSelector = (state: RootState): User | null => {
    return state.connectedUser.value;
};
