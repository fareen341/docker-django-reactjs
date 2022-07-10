import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = "false";

export const loginSlice = createSlice({
    name: "userLoggedIn",
    initialState: {value: initialStateValue},
    reducers: {
        setLoginUser:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setLoginUser } = loginSlice.actions;
export default loginSlice.reducer;