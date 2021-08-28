import base64 from 'base-64';

let secureStorage = {// Secure Local Storage with base64, value should be an object
    set: (key, value) => {
        localStorage.setItem(key, base64.encode(JSON.stringify(value)));
    },
    get: (key) => {
        let data = {};
        try {
            data = JSON.parse(base64.decode(localStorage.getItem(key)));
        } catch (e) {
            console.error("Secure Storage Error: " + e);
        }
        return data;
    },
    clear: () => localStorage.clear()
}

export default secureStorage;