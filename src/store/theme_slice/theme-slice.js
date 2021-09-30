import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme } from "./theme-reducers";
import { DarkTheme, LightTheme } from "./theme-values";
import { localStorageKeys } from "../../utils/enums";

const isDarkTheme = localStorage.getItem(localStorageKeys.IS_DARK_THEME)
const intialState = (isDarkTheme === "false") ? { ...LightTheme } : { ...DarkTheme }

const themeSlice = createSlice({
    name: "theme",
    initialState: intialState,
    reducers: {
        toggleTheme
    }
});

export const themeActions = themeSlice.actions;
export default themeSlice;