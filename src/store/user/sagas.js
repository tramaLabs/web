import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { currentUserRead, CURRENT_USER_READ_REQUEST } from './actions'
import { authLogout } from '../auth/actions'

export function* readCurrentUser() {
  try {
    const { data } = yield call(api.get, '/users/me')
    yield put(currentUserRead.success(data))
  } catch (error) {
    yield put(currentUserRead.failure(error))
    yield put(authLogout())
  }
}

export function* watchCurrentUserReadRequest() {
  while (true) {
    yield take(CURRENT_USER_READ_REQUEST)
    yield call(readCurrentUser)
  }
}

export default function* () {
  yield fork(watchCurrentUserReadRequest)
}
