import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = {username: "", password: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login:(state, action) => {
            //state: stores current and previous vaue of the state
            //first it'll be initial value and then it'll be whatever we change it'll hold that
            //previous state is in value so state.value
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;