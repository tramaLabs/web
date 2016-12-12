import { normalize, arrayOf } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import saga, * as sagas from './sagas'
import tag from './schema'

const resolve = jest.fn()
const reject = jest.fn()
const error = { response: 'test' }

beforeEach(() => {
  jest.resetAllMocks()
})

describe('createTag', () => {
  const data = { id: 1, title: 'test' }

  it('calls success and resolve', () => {
    const generator = sagas.createTag(data, resolve)
    expect(generator.next().value).toEqual(call(api.post, '/tags', data))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data }).value)
      .toEqual(put(actions.tagCreate.success(normalize(data, tag))))
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure and reject', () => {
    const generator = sagas.createTag(data, undefined, reject)
    expect(generator.next().value).toEqual(call(api.post, '/tags', data))
    expect(reject).not.toBeCalled()
    expect(generator.throw(error).value).toEqual(put(actions.tagCreate.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
  })
})

describe('readTagList', () => {
  const data = [1, 2, 3]

  it('calls success and resolve', () => {
    const generator = sagas.readTagList({ limit: 1 }, resolve)
    expect(generator.next().value).toEqual(call(api.get, '/tags', { params: { limit: 1 } }))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data }).value)
      .toEqual(put(actions.tagListRead.success(normalize(data, arrayOf(tag)))))
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure and reject', () => {
    const generator = sagas.readTagList({ limit: 1 }, undefined, reject)
    expect(generator.next().value).toEqual(call(api.get, '/tags', { params: { limit: 1 } }))
    expect(reject).not.toBeCalled()
    expect(generator.throw(error).value).toEqual(put(actions.tagListRead.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
  })
})

test('watchTagCreateRequest', () => {
  const payload = { data: 1, resolve, reject }
  const generator = sagas.watchTagCreateRequest()
  expect(generator.next().value).toEqual(take(actions.TAG_CREATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.createTag, ...Object.values(payload)))
})

test('watchTagListReadRequest', () => {
  const payload = { params: { limit: 1 }, resolve, reject }
  const generator = sagas.watchTagListReadRequest()
  expect(generator.next().value).toEqual(take(actions.TAG_LIST_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readTagList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchTagCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchTagListReadRequest))
})
