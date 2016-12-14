import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import { currentUserRead, CURRENT_USER_READ_REQUEST } from './actions'
import user from './schema'
import api from 'services/api'

export function* readCurrentUser () {
  try {
    const { data } = yield call(api.get, '/users/me')
    yield put(currentUserRead.success({ ...normalize(data, user), data }))
  } catch (error) {
    yield put(currentUserRead.failure(error))
  }
}

export function* watchCurrentUserReadRequest () {
  while (true) {
    yield take(CURRENT_USER_READ_REQUEST)
    yield call(readCurrentUser)
  }
}

export default function* () {
  yield fork(watchCurrentUserReadRequest)
}
