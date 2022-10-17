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
            const user = state.user; 
        }
    }
})