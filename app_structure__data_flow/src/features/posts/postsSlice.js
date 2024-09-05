import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            // prepare callback will simplify our posts components
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        },

    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;