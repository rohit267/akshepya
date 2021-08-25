import axios from 'axios';
import { API } from '../configs/api';
import { Login } from '../reduxStore/auth'

export async function signup({ fullName, email, password, avatar }) {

    let signupFomData = new FormData();
    signupFomData.append('fullName', fullName);
    signupFomData.append('email', email);
    signupFomData.append('password', password);
    signupFomData.append('avatar', avatar);

    try {
        let response = await axios.post(API.signup, signupFomData)
            .catch(error => {
                return error.response;
            });

        if (response.status === 200) {
            return { status: true };
        }
        else {
            return { status: false, error: response.data.error };
        }
    } catch(e) {
        return { status: false, error: 'Something went wrong!' };
    }
}

export async function login({ email, password }, dispatch) {

    const loginPayload = {
        email, password
    };

    try {
        let response = await axios.post(API.login, loginPayload)
            .catch(error => {
                return error.response;
            });
        console.log("Login Response====>", response);
        
        if (response.status === 200) {
            const accessToken = response.data.data.accessToken;
            let tmepUserData = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString('ascii'));
            dispatch(Login({
                name: tmepUserData.name,
                accessToken: accessToken,
                email: tmepUserData.email,
                avatar: tmepUserData.avatar,
                loggedAt: tmepUserData.iat,
                isLoggedIn: true
            }))
            return { status: true };
        }
        else {
            return { status: false, error: response.data.error };
        }
    } catch(e) {
        return { status: false, error: 'Something went wrong!' };
    }
}