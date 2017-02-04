import { push } from 'react-router-redux'
import { take, put, call, fork, select } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import { extractTagList } from '../tag/sagas'
import { fromTag } from '../selectors'
import saga, * as sagas from './sagas'

describe('createInitiative', () => {
  const data = { id: 1, title: 'test', slug: 'test', description: 'description' }

  it('calls success', () => {
    const generator = sagas.createInitiative(data)
    expect(generator.next().value).toEqual(call(extractTagList, 'test\n\ndescription'))
    expect(generator.next().value).toEqual(select(fromTag.getList))
    expect(generator.next([1, 2]).value).toEqual(call(api.post, '/initiatives', {
      ...data,
      tags: [1, 2]
    }))
    expect(generator.next({ data }).value).toEqual(put(actions.initiativeCreate.success(data)))
    expect(generator.next().value).toEqual(put(push('/iniciativas/1/test')))
  })

  it('calls failure', () => {
    const generator = sagas.createInitiative(data)
    expect(generator.next().value).toEqual(call(extractTagList, 'test\n\ndescription'))
    expect(generator.next().value).toEqual(select(fromTag.getList))
    expect(generator.next(['1', '2']).value).toEqual(call(api.post, '/initiatives', {
      ...data,
      tags: ['1', '2']
    }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeCreate.failure('test')))
  })
})

describe('readInitiativeList', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.readInitiativeList({ limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/initiatives', { params: { limit: 1 } }))
    expect(generator.next({ data }).value).toEqual(put(actions.initiativeListRead.success(data)))
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
      put(actions.initiativeDetailRead.success(data))
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
      put(actions.initiativeUpdate.success(data))
    )
  })

  it('calls failure', () => {
    const generator = sagas.updateInitiative(1, data)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeUpdate.failure('test')))
  })
})

describe('joinInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.joinInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/join'))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeJoin.success(data))
    )
  })

  it('calls failure', () => {
    const generator = sagas.joinInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/join'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeJoin.failure('test')))
  })
})

describe('leaveInitiative', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.leaveInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/leave'))
    expect(generator.next({ data }).value).toEqual(
      put(actions.initiativeLeave.success(data))
    )
  })

  it('calls failure', () => {
    const generator = sagas.leaveInitiative(1)
    expect(generator.next().value).toEqual(call(api.put, '/initiatives/1/leave'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativeLeave.failure('test')))
  })
})

test('watchInitiativePhotoUpdateProgress', () => {
  const generator = sagas.watchInitiativePhotoUpdateProgress('test')
  expect(generator.next().value).toEqual(take('test'))
  expect(generator.next(0.5).value).toEqual(put(actions.initiativePhotoUpdate.progress(0.5)))
})

describe('updatePhotoInitiative', () => {
  const data = { id: 1 }
  const [upload, chan] = sagas.createUploader()

  it('calls success', () => {
    const generator = sagas.updatePhotoInitiative(1, data)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([upload, chan]).value)
      .toEqual(fork(sagas.watchInitiativePhotoUpdateProgress, chan))
    expect(generator.next().value).toEqual(call(upload, '/initiatives/1/photo', data))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.initiativePhotoUpdate.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.updatePhotoInitiative(1, data)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([upload, chan]).value)
      .toEqual(fork(sagas.watchInitiativePhotoUpdateProgress, chan))
    expect(generator.throw('test').value)
      .toEqual(put(actions.initiativePhotoUpdate.failure('test')))
    expect(generator.next().value).toEqual(put(actions.initiativePhotoPreview.cancel()))
  })
})

describe('previewPhotoInitiative', () => {
  const data = new File(['test'], 'test.jpg')
  const chan = sagas.createPreviewer(data)

  it('calls failure when file size is greater than the allowed', () => {
    const generator = sagas.previewPhotoInitiative({ size: 999999999 })
    expect(generator.next().value).toEqual(put(actions.initiativePhotoPreview.failure()))
    generator.next()
  })

  it('calls success', () => {
    const generator = sagas.previewPhotoInitiative(data)
    expect(generator.next().value).toEqual(call(sagas.createPreviewer, data))
    expect(generator.next(chan).value).toEqual(take(chan))
    expect(generator.next('url').value).toEqual(put(actions.initiativePhotoPreview.success('url')))
  })

  it('calls cancel', () => {
    const generator = sagas.previewPhotoInitiative(data)
    expect(generator.next().value).toEqual(call(sagas.createPreviewer, data))
    expect(generator.next(chan).value).toEqual(take(chan))
    expect(generator.throw().value).toEqual(put(actions.initiativePhotoPreview.cancel()))
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

test('watchInitiativePhotoUpdateRequest', () => {
  const payload = { id: 1, data: 1 }
  const generator = sagas.watchInitiativePhotoUpdateRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_PHOTO_UPDATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.updatePhotoInitiative, ...Object.values(payload)))
})

test('watchInitiativePhotoPreviewRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchInitiativePhotoPreviewRequest()
  expect(generator.next().value).toEqual(take(actions.INITIATIVE_PHOTO_PREVIEW_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.previewPhotoInitiative, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeListReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeDetailReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeUpdateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeJoinRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativeLeaveRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativePhotoUpdateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchInitiativePhotoPreviewRequest))
})
