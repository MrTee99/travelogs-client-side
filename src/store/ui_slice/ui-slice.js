import { createSlice } from "@reduxjs/toolkit";
import { showBackBtn, pressBackButton, } from './ui-reducer'

const initialState = {
    displayBackButton: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        showBackBtn,
        pressBackButton
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;