import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    accessToken: "",
    email: "",
    loggedAt: "",
    isLoggedIn: false
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, email, accessToken } = action;
            state.accessToken = accessToken;
            state.name = name;
            state.email = email;
            state.loggedAt = Math.floor(new Date.now() / 1000);
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.accessToken = "";
            state.name = "";
            state.email = "";
            state.loggedAt = "";
            state.isLoggedIn = false;
        }
    },
})

export const { login, logout } = counterSlice.actions

export default counterSlice.reducer