const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } = require("../constants/authConstants")

const authReducer = (state = { userToken: [] }, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('auth', JSON.stringify([action.payload]))
            return {
                ...state,
                userToken: [action.payload],
                errorLoginFailed: '',
                errorLogoutFailed: '', 
            }
        case USER_LOGIN_FAILED:
            localStorage.setItem('auth', JSON.stringify([]))
            return {
                ...state,
                userToken: [],
                errorLoginFailed: action.payload,
                errorLogoutFailed: '', 
            }
        default:
            return state
    }
}

export default authReducer;