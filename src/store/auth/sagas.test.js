import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import * as actions from './actions'
import { currentUserRead } from '../user/actions'
import api from 'services/api'
import saga, * as sagas from './sagas'

const resolve = jest.fn()
const reject = jest.fn()
const error = { data: 'test' }

beforeEach(() => {
  jest.resetAllMocks()
})

describe('serviceAuth', () => {
  it('calls success and resolve', () => {
    const generator = sagas.serviceAuth('service', 1, resolve)
    expect(generator.next().value).toEqual(call(api.post, '/auth/service', { access_token: 1 }))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data: { token: 1 } }).value).toEqual(put(actions.auth.success(1)))
    expect(resolve).toHaveBeenCalledWith(1)
  })

  it('calls failure and reject', () => {
    const generator = sagas.serviceAuth('service', 1, undefined, reject)
    expect(generator.next().value).toEqual(call(api.post, '/auth/service', { access_token: 1 }))
    expect(reject).not.toBeCalled()
    expect(generator.throw(error).value).toEqual(put(actions.auth.failure('test')))
    expect(reject).toHaveBeenCalledWith(error)
  })
})

test('watchAuthSuccess', () => {
  const generator = sagas.watchAuthSuccess()
  expect(generator.next().value).toEqual(take(actions.AUTH_SUCCESS))
  expect(generator.next({ token: 1 }).value).toEqual([
    call(cookie.save, 'token', 1, { path: '/' }),
    call(api.setToken, 1)
  ])
  expect(generator.next().value).toEqual(put(currentUserRead.request()))
})

test('watchAuthLogout', () => {
  const generator = sagas.watchAuthLogout()
  expect(generator.next().value).toEqual(take(actions.AUTH_LOGOUT))
  expect(generator.next().value).toEqual([
    call(cookie.remove, 'token', { path: '/' }),
    call(api.unsetToken)
  ])
})

test('watchAuthRequest', () => {
  const payload = { service: 'facebook', accessToken: 1, resolve, reject }
  const generator = sagas.watchAuthRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.serviceAuth, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchAuthSuccess))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLogout))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthRequest))
})
