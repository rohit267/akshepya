// Minimum eight characters, at least one letter, one number and one special character
const validPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isPasswordValid(password) {
    if (validPasswordRegex.test(password)) {
        return true
    } else {
        return false
    }
}

export function isEmailValid(email) {
    if(validEmailRegex.test(email)) {
        return true
    } else {
        return false
    }
}

// Better not to validate the name at all, apart from checking that it is empty.
export function isNameValid(name) {
    if(name && name.length > 0) {
        return true
    } else {
        return false
    }
}