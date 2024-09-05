import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Kola" },
    { id: "1", name: "Shola" },
    { id: "2", name: "Jolaade" }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer;