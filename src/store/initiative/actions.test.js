import * as actions from './actions'

test('initiativeCreate', () => {
  expect(actions.initiativeCreate.request({ id: 1, title: 'test' })).toEqual({
    type: actions.INITIATIVE_CREATE_REQUEST,
    data: {
      id: 1,
      title: 'test'
    }
  })

  expect(actions.initiativeCreate.success(1)).toEqual({
    type: actions.INITIATIVE_CREATE_SUCCESS,
    detail: 1
  })

  expect(actions.initiativeCreate.failure('test')).toEqual({
    type: actions.INITIATIVE_CREATE_FAILURE,
    error: 'test'
  })
})

test('initiativeListRead', () => {
  expect(actions.initiativeListRead.request({ limit: 3 })).toEqual({
    type: actions.INITIATIVE_LIST_READ_REQUEST,
    params: { limit: 3 }
  })

  expect(actions.initiativeListRead.success([1, 2])).toEqual({
    type: actions.INITIATIVE_LIST_READ_SUCCESS,
    list: [1, 2]
  })

  expect(actions.initiativeListRead.failure('test')).toEqual({
    type: actions.INITIATIVE_LIST_READ_FAILURE,
    error: 'test'
  })
})

test('initiativeDetailRead', () => {
  expect(actions.initiativeDetailRead.request(3)).toEqual({
    type: actions.INITIATIVE_DETAIL_READ_REQUEST,
    id: 3
  })

  expect(actions.initiativeDetailRead.success(1)).toEqual({
    type: actions.INITIATIVE_DETAIL_READ_SUCCESS,
    detail: 1
  })

  expect(actions.initiativeDetailRead.failure('test')).toEqual({
    type: actions.INITIATIVE_DETAIL_READ_FAILURE,
    error: 'test'
  })
})

test('initiativeUpdate', () => {
  expect(actions.initiativeUpdate.request(3, { id: 1 })).toEqual({
    type: actions.INITIATIVE_UPDATE_REQUEST,
    id: 3,
    data: { id: 1 }
  })

  expect(actions.initiativeUpdate.success(1)).toEqual({
    type: actions.INITIATIVE_UPDATE_SUCCESS,
    detail: 1
  })

  expect(actions.initiativeUpdate.failure('test')).toEqual({
    type: actions.INITIATIVE_UPDATE_FAILURE,
    error: 'test'
  })
})

test('initiativeJoin', () => {
  expect(actions.initiativeJoin.request(3)).toEqual({
    type: actions.INITIATIVE_JOIN_REQUEST,
    id: 3
  })

  expect(actions.initiativeJoin.success(1)).toEqual({
    type: actions.INITIATIVE_JOIN_SUCCESS,
    detail: 1
  })

  expect(actions.initiativeJoin.failure('test')).toEqual({
    type: actions.INITIATIVE_JOIN_FAILURE,
    error: 'test'
  })
})

test('initiativeLeave', () => {
  expect(actions.initiativeLeave.request(3)).toEqual({
    type: actions.INITIATIVE_LEAVE_REQUEST,
    id: 3
  })

  expect(actions.initiativeLeave.success(1)).toEqual({
    type: actions.INITIATIVE_LEAVE_SUCCESS,
    detail: 1
  })

  expect(actions.initiativeLeave.failure('test')).toEqual({
    type: actions.INITIATIVE_LEAVE_FAILURE,
    error: 'test'
  })
})

test('initiativePhotoUpdate', () => {
  expect(actions.initiativePhotoUpdate.request(1, 'file')).toEqual({
    type: actions.INITIATIVE_PHOTO_UPDATE_REQUEST,
    id: 1,
    data: 'file'
  })

  expect(actions.initiativePhotoUpdate.success(1)).toEqual({
    type: actions.INITIATIVE_PHOTO_UPDATE_SUCCESS,
    detail: 1
  })

  expect(actions.initiativePhotoUpdate.failure('test')).toEqual({
    type: actions.INITIATIVE_PHOTO_UPDATE_FAILURE,
    error: 'test'
  })

  expect(actions.initiativePhotoUpdate.progress(0.5)).toEqual({
    type: actions.INITIATIVE_PHOTO_UPDATE_PROGRESS,
    progress: 0.5
  })
})

test('initiativePhotoPreview', () => {
  expect(actions.initiativePhotoPreview.request('file')).toEqual({
    type: actions.INITIATIVE_PHOTO_PREVIEW_REQUEST,
    data: 'file'
  })

  expect(actions.initiativePhotoPreview.success('test')).toEqual({
    type: actions.INITIATIVE_PHOTO_PREVIEW_SUCCESS,
    url: 'test'
  })

  expect(actions.initiativePhotoPreview.failure('test')).toEqual({
    type: actions.INITIATIVE_PHOTO_PREVIEW_FAILURE,
    error: 'test'
  })

  expect(actions.initiativePhotoPreview.cancel()).toEqual({
    type: actions.INITIATIVE_PHOTO_PREVIEW_CANCEL
  })
})
