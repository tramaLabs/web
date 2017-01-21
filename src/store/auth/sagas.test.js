import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import api from 'services/api'
import * as actions from '../actions'
import saga, * as sagas from './sagas'

window.FB = {
  init: () => {},
  login: (cb) => cb({ authResponse: 'foo' }),
  api: (endpoint, options, cb) => cb()
}

describe('promises', () => {
  Object.keys(sagas.promises).forEach((promiseName) => {
    test(`${promiseName} returns a promise`, () => {
      const promise = sagas.promises[promiseName]
      expect(promise()).toBeInstanceOf(Promise)
    })
  })
})

test('appendFbRoot', () => {
  expect(document.querySelector('div#fb-root')).toBeFalsy()
  sagas.appendFbRoot()
  expect(document.querySelector('div#fb-root')).toBeTruthy()
})

test('serviceAction', () => {
  const action = (suffix, service) => ({ type: `AUTH_LOGIN_${suffix}`, service })
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('REQUEST', 'facebook'))).toBe(true)
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('PREPARE', 'facebook'))).toBe(false)
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('REQUEST', 'google'))).toBe(false)
})

describe('loginFacebook', () => {
  it('calls success', () => {
    const generator = sagas.loginFacebook()
    expect(generator.next().value)
      .toEqual(call(sagas.promises.fbLogin, { scope: 'public_profile,email' }))
    expect(generator.next({ accessToken: 1 }).value)
      .toEqual(call(api.post, '/auth/facebook', { access_token: 1 }))
    expect(generator.next({ data: { token: 1 } }).value)
      .toEqual(put(actions.authLogin.success(1)))
    expect(generator.next().value).toEqual(put(actions.currentUserRead.request()))
  })

  it('calls failure', () => {
    const generator = sagas.loginFacebook()
    expect(generator.next().value)
      .toEqual(call(sagas.promises.fbLogin, { scope: 'public_profile,email' }))
    expect(generator.throw('test').value).toEqual(put(actions.authLogin.failure('test')))
  })
})

test('prepareFacebook', () => {
  const generator = sagas.prepareFacebook({ appId: 'test', foo: 'bar' })
  expect(generator.next().value).toEqual(call(sagas.appendFbRoot))
  expect(generator.next().value)
    .toEqual(call(sagas.promises.loadScript, '//connect.facebook.net/en_US/sdk.js'))
  expect(generator.next().value)
    .toEqual(call([window.FB, window.FB.init], { appId: 'test', version: 'v2.8', foo: 'bar' }))
})

test('watchAuthLoginFacebook', () => {
  const payload = { options: 1 }
  const generator = sagas.watchAuthLoginFacebook()
  generator.next()
  expect(generator.next(payload).value).toEqual(call(sagas.prepareFacebook, 1))
  generator.next()
  expect(generator.next().value).toEqual(call(sagas.loginFacebook))
})

test('watchAuthLoginSuccess', () => {
  const generator = sagas.watchAuthLoginSuccess()
  expect(generator.next().value).toEqual(take(actions.AUTH_LOGIN_SUCCESS))
  expect(generator.next({ token: 1 }).value).toEqual([
    call(cookie.save, 'token', 1, { path: '/' }),
    call(api.setToken, 1)
  ])
})

test('watchAuthLogout', () => {
  const generator = sagas.watchAuthLogout()
  expect(generator.next().value).toEqual(take(actions.AUTH_LOGOUT))
  expect(generator.next().value).toEqual([
    call(cookie.remove, 'token', { path: '/' }),
    call(api.unsetToken)
  ])
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLoginFacebook))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLoginSuccess))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLogout))
})
