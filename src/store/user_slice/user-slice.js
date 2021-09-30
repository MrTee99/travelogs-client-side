import { createSlice } from "@reduxjs/toolkit";
import { resetUser, setUser, setToken, updateIsUserAuthenticated, setUserAndToken } from "./user-reducer";
import { userDataInitialVal } from "../../utils/enums";

const initialState = {
    isAuthenticated: false,
    user: userDataInitialVal,
    token: ""
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        resetUser,
        setToken, 
        setUser, 
        updateIsUserAuthenticated,
        setUserAndToken, 
    }
})

export const userActions = userSlice.actions;
export default userSlice;