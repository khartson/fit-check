import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    iniitialState: {
        user: {
            loggedIn: false,
        }
    },
    reducers: {
        userLoggedIn(state, action) {
            state.user = { ...action.payload, loggedIn: True }
        }
    }
})

export const { userLoggedIn } = userSlice.actions;

export default userSlice.reducer; 