module.exports = {
    isValidName: function isValidName(name) {
        let isValid = true;
        if (!name) isValid = false;
        if (!/^([A-Za-z]+\s)*[A-Za-z]+$/.test(name)) isValid = false;
        return isValid;
    },
    isValidEmail: function isValidEmail(email) {
        let isValid = true;
        if (!email) isValid = false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) isValid = false;
        return isValid;
    },
    isValidPassword: function isValidPassword(password) {
        let isValid = true;
        if (!password) isValid = false;
        if (password.length < 8) {
            console.log(password, password.length)
            isValid = false;
        }
        return isValid;
    }
}
