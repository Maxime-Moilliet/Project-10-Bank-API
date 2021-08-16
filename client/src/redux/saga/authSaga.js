import { call, put, takeLatest } from "@redux-saga/core/effects"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUESTED, USER_LOGIN_SUCCESS } from "../constants/authConstants"
import { fetchAuthLogin } from "../api/authFetch"

export function* handlerUserLogin ({ payload }) {
    try {
        const user = yield call(fetchAuthLogin, payload)
        yield put({ type: USER_LOGIN_SUCCESS, payload: user.data.body.token })
    } catch(err) {
        yield put({ type: USER_LOGIN_FAILED, payload: "Incorrect password or username" })
    }
}

export function* watcherAuthLoginSaga() {
    yield takeLatest(USER_LOGIN_REQUESTED, handlerUserLogin)
}

