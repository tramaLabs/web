import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { AUTH_SUCCESS } from '../auth/actions'
import api from 'services/api'
import saga, * as sagas from './sagas'
import user from './schema'

const resolve = jest.fn()
const reject = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

describe('retrieveCurrentUser', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.retrieveCurrentUser()
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.currentUserRetrieve.success(normalize(data, user))))
  })

  it('calls success and resolve', () => {
    const generator = sagas.retrieveCurrentUser(resolve)
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data }).value)
      .toEqual(put(actions.currentUserRetrieve.success(normalize(data, user))))
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure', () => {
    const generator = sagas.retrieveCurrentUser()
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.throw('test').value).toEqual(put(actions.currentUserRetrieve.failure('test')))
  })

  it('calls failure and reject', () => {
    const generator = sagas.retrieveCurrentUser(resolve, reject)
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(reject).not.toBeCalled()
    expect(generator.throw('test').value).toEqual(put(actions.currentUserRetrieve.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
  })
})

test('watchCurrentUserRetrieveRequest', () => {
  const payload = { resolve, reject }
  const generator = sagas.watchCurrentUserRetrieveRequest()
  expect(generator.next().value).toEqual(take([
    actions.CURRENT_USER_RETRIEVE_REQUEST,
    AUTH_SUCCESS
  ]))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.retrieveCurrentUser, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchCurrentUserRetrieveRequest))
})
