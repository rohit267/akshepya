import axios from 'axios';
import { API } from '../configs/api';
import { Login } from '../reduxStore/auth'

export async function signup({ fullName, email, password, avatar }) {

    let signupFomData = new FormData();
    signupFomData.append('fullName', fullName);
    signupFomData.append('email', email);
    signupFomData.append('password', password);
    signupFomData.append('avatar', avatar);

    let response = await axios.post(API.signup, signupFomData);

    if (response.data.status === "success") {
        return { status: true };
    }
    else {
        return { status: false, error: response.error };
    }
}

export async function login({ email, password }, dispatch) {

    const loginPayload = {
        email, password
    };

    let response = await axios.post(API.login, loginPayload);
    console.log("Login Response====>", response);
    if (response.data.status === "success") {
        const accessToken = response.data.data.accessToken;
        let tmepUserData = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString('ascii'));
        dispatch(Login({
            name: tmepUserData.name,
            accessToken: accessToken,
            email: tmepUserData.email,
            loggedAt: tmepUserData.iat,
            isLoggedIn: true
        }))
        return { status: true };
    }
    else {
        return { status: false, error: response.error };
    }
}