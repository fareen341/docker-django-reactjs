import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = [];

export const userSlice = createSlice({
    name: "getusers",
    initialState: {value: initialStateValue},
    reducers: {
        updateUsers:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateUsers } = userSlice.actions;
export default userSlice.reducer;