import { createSlice } from "@reduxjs/toolkit";
import { resetPosts, fetchPosts } from "./post-reducers";

const initialState = {
    posts: []
};

const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        resetPosts,
        fetchPosts
    }
});

export const postActions = postSlice.actions;
export default postSlice;
  