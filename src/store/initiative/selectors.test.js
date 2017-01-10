import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    list: [],
    detail: null,
    photoUpdateProgress: 0,
    photoPreviewUrl: null
  })
})

test('getList', () => {
  expect(selectors.getList()).toEqual(selectors.initialState.list)
  expect(selectors.getList({})).toEqual(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toEqual(selectors.initialState.list)
})

test('getDetail', () => {
  expect(selectors.getDetail()).toEqual(selectors.initialState.detail)
  expect(selectors.getDetail({})).toEqual(selectors.initialState.detail)
  expect(selectors.getDetail(selectors.initialState)).toEqual(selectors.initialState.detail)
})

test('getPhotoUpdateProgress', () => {
  expect(selectors.getPhotoUpdateProgress()).toEqual(selectors.initialState.photoUpdateProgress)
  expect(selectors.getPhotoUpdateProgress({})).toEqual(selectors.initialState.photoUpdateProgress)
  expect(selectors.getPhotoUpdateProgress(selectors.initialState))
    .toEqual(selectors.initialState.photoUpdateProgress)
})

test('getPhotoPreviewUrl', () => {
  expect(selectors.getPhotoPreviewUrl()).toEqual(selectors.initialState.photoPreviewUrl)
  expect(selectors.getPhotoPreviewUrl({})).toEqual(selectors.initialState.photoPreviewUrl)
  expect(selectors.getPhotoPreviewUrl(selectors.initialState))
    .toEqual(selectors.initialState.photoPreviewUrl)
})
