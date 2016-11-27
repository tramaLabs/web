import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import * as actions from './actions'
import api, { setToken } from 'services/api'
import saga, * as sagas from './sagas'

const resolve = jest.fn()
const reject = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

describe('facebookAuth', () => {
  it('calls success', () => {
    const generator = sagas.facebookAuth(1)
    expect(generator.next().value).toEqual(call(api.post, '/auth/facebook', { access_token: 1 }))
    expect(generator.next({ token: 1 }).value).toEqual(call(cookie.save, 'token', 1, { path: '/' }))
    expect(generator.next().value).toEqual(call(setToken, 1))
    expect(generator.next().value).toEqual(put(actions.authFacebook.success(1)))
  })

  it('calls success and resolve', () => {
    const generator = sagas.facebookAuth(1, resolve)
    expect(generator.next().value).toEqual(call(api.post, '/auth/facebook', { access_token: 1 }))
    expect(resolve).not.toBeCalled()
    generator.next({ token: 1 })
    generator.next()
    expect(generator.next().value).toEqual(put(actions.authFacebook.success(1)))
    expect(resolve).toHaveBeenCalledWith(1)
  })

  it('calls failure', () => {
    const generator = sagas.facebookAuth(1)
    expect(generator.next().value).toEqual(call(api.post, '/auth/facebook', { access_token: 1 }))
    expect(generator.throw('test').value).toEqual(put(actions.authFacebook.failure('test')))
  })

  it('calls failure and reject', () => {
    const generator = sagas.facebookAuth(1, resolve, reject)
    expect(generator.next().value).toEqual(call(api.post, '/auth/facebook', { access_token: 1 }))
    expect(reject).not.toBeCalled()
    expect(generator.throw('test').value).toEqual(put(actions.authFacebook.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
  })
})

test('watchAuthFacebookRequest', () => {
  const payload = { fbToken: 1, resolve, reject }
  const generator = sagas.watchAuthFacebookRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_FACEBOOK_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.facebookAuth, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchAuthFacebookRequest))
})
