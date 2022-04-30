import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../domain/user";

type ConnectedUserState = {
    value: User | null;
};

// Define the initial state using that type
const initialState = {
    value: null
};

export const connectedUserSlice = createSlice({
    name: "connectedUser",
    initialState,
    reducers: {
        setConnectedUser: (state: ConnectedUserState, action: PayloadAction<User>) => {
            state.value = action.payload;
        },
        resetConnectedUser: (state: ConnectedUserState) => {
            state.value = null;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setConnectedUser, resetConnectedUser } = connectedUserSlice.actions;

const connectedUserReducer = connectedUserSlice.reducer;

export default connectedUserReducer;
