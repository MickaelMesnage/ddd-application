import { Dispatch } from "@reduxjs/toolkit";
import { setUsers } from "./usersSlice";
import getUsers from "infrastructure/api/user/getUsers";
import { UserEmail, UserIsAdmin } from "domain/user";
import addUser from "infrastructure/api/user/addUser";

export const getUsersAction = async (dispatch: Dispatch): Promise<void> => {
    const users = await getUsers();
    dispatch(setUsers(users));
};

export const addUserAction = async (
    dispatch: Dispatch,
    props: { email: UserEmail; isAdmin: UserIsAdmin }
): Promise<void> => {
    const users = await addUser(props);
    dispatch(setUsers(users));
};
