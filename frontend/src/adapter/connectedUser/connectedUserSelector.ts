import User from "domain/user";
import { RootState } from "../redux/store";

export const getConnectedUserSelector = (state: RootState): User | null => {
    return state.connectedUser.value;
};
export const isConnectedUserAdminSelector = (state: RootState): boolean => {
    if (state.connectedUser.value) {
        return (state.connectedUser.value as User).isAdmin;
    }
    return false;
};
