import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { authLogout } from '../auth/actions'
import api from 'services/api'
import saga, * as sagas from './sagas'
import user from './schema'

describe('readCurrentUser', () => {
  const data = { id: 1, title: 'test' }

  it('calls success and resolve', () => {
    const generator = sagas.readCurrentUser()
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.currentUserRead.success({ ...normalize(data, user), data })))
  })

  it('calls failure and reject', () => {
    const generator = sagas.readCurrentUser()
    expect(generator.next().value).toEqual(call(api.get, '/users/me'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.currentUserRead.failure('test')))
    expect(generator.next().value).toEqual(put(authLogout()))
  })
})

test('watchCurrentUserReadRequest', () => {
  const generator = sagas.watchCurrentUserReadRequest()
  expect(generator.next().value).toEqual(take(actions.CURRENT_USER_READ_REQUEST))
  expect(generator.next().value).toEqual(call(sagas.readCurrentUser))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchCurrentUserReadRequest))
})
