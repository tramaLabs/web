import { delay } from 'redux-saga'
import { take, put, call, fork } from 'redux-saga/effects'
import { snackHide, SNACK_SHOW } from './actions'

const millisecondsPerChar = 150

export function* showSnack (message) {
  const time = message.replace(/\s/g, '').length * millisecondsPerChar
  yield call(delay, time)
  yield put(snackHide())
}

export function* watchSnackShow () {
  while (true) {
    const { message } = yield take(SNACK_SHOW)
    yield call(showSnack, message)
  }
}

export default function* () {
  yield fork(watchSnackShow)
}
