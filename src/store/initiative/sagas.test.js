import { normalize, arrayOf } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import saga, * as sagas from './sagas'
import initiative from './schema'

describe('createInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.createInitiative(data)
    expect(generator.next().value).toEqual(call(api.post, '/initiatives', data))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeCreate.success({ ...normalize(data, initiative), data }))
    )
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.createInitiative(data)
    expect(generator.next().value).toEqual(call(api.post, '/initiatives', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeCreate.failure('test')))
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })
})

describe('readInitiativeList', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.readInitiativeList({ limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/initiatives', { params: { limit: 1 } }))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeListRead.success({ ...normalize(data, arrayOf(initiative)), data }))
    )
  })

  it('calls failure', () => {
    const generator = sagas.readInitiativeList({ limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/initiatives', { params: { limit: 1 } }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeListRead.failure('test')))
  })
})

describe('readInitiativeDetail', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.readInitiativeDetail(1)
    expect(generator.next().value).toEqual(call(api.get, '/initiatives/1'))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeDetailRead.success({ ...normalize(data, initiative), data }))
    )
  })

  it('calls failure', () => {
    const generator = sagas.readInitiativeDetail(1)
    expect(generator.next().value).toEqual(call(api.get, '/initiatives/1'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeDetailRead.failure('test')))
  })
})

describe('updateInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.updateInitiative(1, data)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1', data))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeUpdate.success({ ...normalize(data, initiative), data }))
    )
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.updateInitiative(1, data)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeUpdate.failure('test')))
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })
})

describe('joinInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.joinInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/join'))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeJoin.success({ ...normalize(data, initiative), data }))
    )
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.joinInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/join'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeJoin.failure('test')))
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })
})

describe('leaveInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.leaveInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/leave'))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeLeave.success({ ...normalize(data, initiative), data }))
    )
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.leaveInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/leave'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeLeave.failure('test')))
    expect(generator.next().done).toBe(false)
    expect(generator.next().done).toBe(true)
  })
})

test('watchInitiativeCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchInitiativeCreateRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_CREATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.createInitiative, ...Object.values(payload)))
})

test('watchInitiativeListReadRequest', () => {
  const payload = { params: { limit: 1 } }
  const generator = sagas.watchInitiativeListReadRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_LIST_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readInitiativeList, ...Object.values(payload)))
})

test('watchInitiativeDetailReadRequest', () => {
  const payload = { id: 1 }
  const generator = sagas.watchInitiativeDetailReadRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_DETAIL_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readInitiativeDetail, ...Object.values(payload)))
})

test('watchInitiativeUpdateRequest', () => {
  const payload = { id: 1, data: 1 }
  const generator = sagas.watchInitiativeUpdateRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_UPDATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.updateInitiative, ...Object.values(payload)))
})

test('watchInitiativeJoinRequest', () => {
  const payload = { id: 1 }
  const generator = sagas.watchInitiativeJoinRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_JOIN_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.joinInitiative, ...Object.values(payload)))
})

test('watchInitiativeLeaveRequest', () => {
  const payload = { id: 1 }
  const generator = sagas.watchInitiativeLeaveRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_LEAVE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.leaveInitiative, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeListReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeDetailReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeUpdateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeJoinRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeLeaveRequest))
})
