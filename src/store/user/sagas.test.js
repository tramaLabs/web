import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import saga, * as sagas from './sagas'
import user from './schema'

const resolve = jest.fn()
const reject = jest.fn()
const error = { data: 'test' }

beforeEach(() => {
  jest.resetAllMocks()
})

describe('readCurrentUser', () => {
  const data = { id: 1, title: 'test' }

  it('calls success and resolve', () => {
    const generator = sagas.readCurrentUser(resolve)
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.currentUserRead.success(normalize(data, user))))
    expect(resolve).not.toBeCalled()
    generator.next()
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure and reject', () => {
    const generator = sagas.readCurrentUser(undefined, reject)
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.throw(error).value)
      .toEqual(put(actions.currentUserRead.failure('test')))
    expect(reject).not.toBeCalled()
    generator.next()
    expect(reject).toHaveBeenCalledWith(error)
  })
})

test('watchCurrentUserReadRequest', () => {
  const payload = { resolve, reject }
  const generator = sagas.watchCurrentUserReadRequest()
  expect(generator.next().value).toEqual(take(actions.CURRENT_USER_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readCurrentUser, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchCurrentUserReadRequest))
})
