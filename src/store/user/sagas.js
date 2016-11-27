import { take, put, call, fork } from 'redux-saga/effects'
import { currentUserRetrieve, CURRENT_USER_RETRIEVE_REQUEST } from './actions'
import api from 'services/api'

const fn = () => true

export function* retrieveCurrentUser (resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.get, '/users/me')
    resolve(data)
    yield put(currentUserRetrieve.success(data))
  } catch (e) {
    reject(e)
    yield put(currentUserRetrieve.failure(e))
  }
}

export function* watchCurrentUserRetrieveRequest () {
  while (true) {
    const { resolve, reject } = yield take(CURRENT_USER_RETRIEVE_REQUEST)
    yield call(retrieveCurrentUser, resolve, reject)
  }
}

export default function* () {
  yield fork(watchCurrentUserRetrieveRequest)
}
