import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    accessToken: "",
    email: "",
    avatar: "",
    loggedAt: "",
    isLoggedIn: false
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login: (state, action) => {
            const { name, accessToken, email, avatar, loggedAt } = action.payload;
            state.accessToken = accessToken;
            state.name = name;
            state.email = email;
            state.avatar = avatar;
            state.loggedAt = loggedAt;
            state.isLoggedIn = true;
        },
        Logout: (state) => {
            state.accessToken = "";
            state.name = "";
            state.email = "";
            state.loggedAt = "";
            state.isLoggedIn = false;
        }
    },
})

export const { Login, Logout } = counterSlice.actions

export default counterSlice.reducer