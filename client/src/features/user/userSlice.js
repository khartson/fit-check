import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            loggedIn: false,
        }
    },
    reducers: {
        userLoggedIn(state, action) {
            state.user = { ...action.payload, loggedIn: true }
        },
    }
})

export const { userLoggedIn } = userSlice.actions;

export default userSlice.reducer; 