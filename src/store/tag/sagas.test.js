import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createTag', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.createTag(data)
    expect(generator.next().value).toEqual(call(api.post, '/tags', data))
    expect(generator.next({ data }).value).toEqual(put(actions.tagCreate.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createTag(data)
    expect(generator.next().value).toEqual(call(api.post, '/tags', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.tagCreate.failure('test')))
  })
})

describe('readTagList', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.readTagList({ limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/tags', { params: { limit: 1 } }))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.tagListRead.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readTagList({ limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/tags', { params: { limit: 1 } }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.tagListRead.failure('test')))
  })
})

describe('extractTagList', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.extractTagList('test')
    expect(generator.next().value).toEqual(call(api.post, '/tags/extract', { text: 'test' }))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.tagListExtract.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.extractTagList('test')
    expect(generator.next().value).toEqual(call(api.post, '/tags/extract', { text: 'test' }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.tagListExtract.failure('test')))
  })
})

test('watchTagCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchTagCreateRequest()
  expect(generator.next().value).toEqual(take(actions.TAG_CREATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.createTag, ...Object.values(payload)))
})

test('watchTagListReadRequest', () => {
  const payload = { params: { limit: 1 } }
  const generator = sagas.watchTagListReadRequest()
  expect(generator.next().value).toEqual(take(actions.TAG_LIST_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readTagList, ...Object.values(payload)))
})

test('watchTagListExtractRequest', () => {
  const payload = { text: 'test' }
  const generator = sagas.watchTagListExtractRequest()
  expect(generator.next().value).toEqual(take(actions.TAG_LIST_EXTRACT_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.extractTagList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchTagCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchTagListReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchTagListExtractRequest))
})
