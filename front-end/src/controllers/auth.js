import axios from 'axios';
import { API } from '../configs/api';

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