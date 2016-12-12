import * as actions from './actions'

test('photoUpload', () => {
  expect(actions.photoUpload.request('file')).toEqual({
    type: actions.PHOTO_UPLOAD_REQUEST,
    data: 'file'
  })

  expect(actions.photoUpload.success({ result: 1, entities: 1 })).toEqual({
    type: actions.PHOTO_UPLOAD_SUCCESS,
    result: 1,
    entities: 1
  })

  expect(actions.photoUpload.failure('test')).toEqual({
    type: actions.PHOTO_UPLOAD_FAILURE,
    error: 'test'
  })

  expect(actions.photoUpload.progress(0.5)).toEqual({
    type: actions.PHOTO_UPLOAD_PROGRESS,
    progress: 0.5
  })
})
