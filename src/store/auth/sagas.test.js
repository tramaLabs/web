import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import * as actions from './actions'
import { currentUserRead } from '../user/actions'
import api from 'services/api'
import saga, * as sagas from './sagas'

describe('serviceAuth', () => {
  it('calls success', () => {
    const generator = sagas.serviceAuth('service', 1)
    expect(generator.next().value).toEqual(call(api.post, '/auth/service', { access_token: 1 }))
    expect(generator.next({ data: { token: 1 } }).value).toEqual(put(actions.auth.success(1)))
    expect(generator.next().value).toEqual(put(currentUserRead.request()))
  })

  it('calls failure', () => {
    const generator = sagas.serviceAuth('service', 1)
    expect(generator.next().value).toEqual(call(api.post, '/auth/service', { access_token: 1 }))
    expect(generator.throw('test').value).toEqual(put(actions.auth.failure('test')))
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })
})

test('watchAuthSuccess', () => {
  const generator = sagas.watchAuthSuccess()
  expect(generator.next().value).toEqual(take(actions.AUTH_SUCCESS))
  expect(generator.next({ token: 1 }).value).toEqual([
    call(cookie.save, 'token', 1, { path: '/' }),
    call(api.setToken, 1)
  ])
  expect(generator.next().done).toBe(false)
})

test('watchAuthLogout', () => {
  const generator = sagas.watchAuthLogout()
  expect(generator.next().value).toEqual(take(actions.AUTH_LOGOUT))
  expect(generator.next().value).toEqual([
    call(cookie.remove, 'token', { path: '/' }),
    call(api.unsetToken)
  ])
  expect(generator.next().done).toBe(false)
})

test('watchAuthRequest', () => {
  const payload = { service: 'facebook', accessToken: 1 }
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
