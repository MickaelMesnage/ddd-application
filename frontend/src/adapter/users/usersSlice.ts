import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "domain/user";

type UsersState = {
    value: Array<User>;
};

// Define the initial state using that type
const initialState = {
    value: []
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state: UsersState, action: PayloadAction<Array<User>>) => {
            state.value = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions;

const usersReducer = usersSlice.reducer;

export default usersReducer;
