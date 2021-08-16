import { all } from "@redux-saga/core/effects"
import { watcherAuthLoginSaga } from "./saga/authSaga"

export default function* rootSaga() {
    yield all([
        watcherAuthLoginSaga(),
    ])
}