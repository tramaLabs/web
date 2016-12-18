import { delay } from 'redux-saga'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

test('showSnack', () => {
  const generator = sagas.showSnack('012 34 56 789')
  expect(generator.next().value).toEqual(call(delay, 1500))
  expect(generator.next().value).toEqual(put(actions.snackHide()))
})

test('watchSnackShow', () => {
  const message = 'test'
  const generator = sagas.watchSnackShow()
  expect(generator.next().value).toEqual(take(actions.SNACK_SHOW))
  expect(generator.next({ message }).value).toEqual(call(sagas.showSnack, message))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchSnackShow))
})
