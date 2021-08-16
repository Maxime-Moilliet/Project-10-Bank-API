import { USER_LOGIN_REQUESTED } from '../constants/authConstants'

export const loginUser = (values) => {
    return {
        type: USER_LOGIN_REQUESTED,
        payload: values
    }
}