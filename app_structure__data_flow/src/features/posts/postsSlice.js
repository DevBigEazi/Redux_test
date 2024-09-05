import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1, title: "Testing Redux Toolkit", content: "I've heard good things about this software"
    },
    {
        id: 2, title: "Slice...", content: "The more I say slice, the more the apple I want"
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;