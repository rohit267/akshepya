import { createSlice } from '@reduxjs/toolkit';
import SecureStorage from '../utility/secureStorage';

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
            SecureStorage.set("_AkShepyaSession", { isLoggedIn: true });
        },
        Logout: (state) => {
            state.accessToken = "";
            state.name = "";
            state.email = "";
            state.loggedAt = "";
            state.isLoggedIn = false;
            SecureStorage.clear();
        }
    },
})

export const { Login, Logout } = counterSlice.actions

export default counterSlice.reducer