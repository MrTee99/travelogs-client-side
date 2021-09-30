import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post_slice/post-slice"
import themeSlice from "./theme_slice/theme-slice";
import primaryColorsSlice from "./primaryColors_slice/primaryColors-slice";
import userSlice from "./user_slice/user-slice";
import uiSlice from "./ui_slice/ui-slice"

const reducer = { 
    theme: themeSlice.reducer,
    primaryColors: primaryColorsSlice.reducer,

    ui: uiSlice.reducer,

    user: userSlice.reducer,
    post: postSlice.reducer,
}

const store = configureStore({ reducer: reducer });
export default store;