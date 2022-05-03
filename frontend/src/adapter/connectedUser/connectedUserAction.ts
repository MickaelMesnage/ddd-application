import { Dispatch } from "@reduxjs/toolkit";
import login from "infrastructure/api/auth/login";
import { UserEmail } from "domain/user";
import { resetConnectedUser, setConnectedUser } from "./connectedUserSlice";
import logout from "infrastructure/api/auth/logout";
import me from "infrastructure/api/auth/me";

export const loginAction = async (dispatch: Dispatch, email: UserEmail): Promise<void> => {
    const user = await login(email);
    dispatch(setConnectedUser(user));
};

export const meAction = async (dispatch: Dispatch): Promise<void> => {
    const user = await me();
    if (user) {
        dispatch(setConnectedUser(user));
    }
};

export const logoutAction = async (dispatch: Dispatch): Promise<void> => {
    await logout();
    dispatch(resetConnectedUser());
};
