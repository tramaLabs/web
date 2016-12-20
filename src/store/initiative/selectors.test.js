import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    ids: [],
    id: null,
    photoUpdateProgress: 0,
    photoPreviewUrl: null
  })
})

test('getIds', () => {
  expect(selectors.getIds()).toEqual(selectors.initialState.ids)
  expect(selectors.getIds({})).toEqual(selectors.initialState.ids)
  expect(selectors.getIds(selectors.initialState)).toEqual(selectors.initialState.ids)
})

test('getId', () => {
  expect(selectors.getId()).toEqual(selectors.initialState.id)
  expect(selectors.getId({})).toEqual(selectors.initialState.id)
  expect(selectors.getId(selectors.initialState)).toEqual(selectors.initialState.id)
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
