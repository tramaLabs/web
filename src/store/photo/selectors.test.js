import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    uploadProgress: 0,
    previewUrl: null
  })
})

test('getUploadProgress', () => {
  expect(selectors.getUploadProgress())
    .toEqual(selectors.initialState.uploadProgress)
  expect(selectors.getUploadProgress({}))
    .toEqual(selectors.initialState.uploadProgress)
  expect(selectors.getUploadProgress(selectors.initialState))
    .toEqual(selectors.initialState.uploadProgress)
})

test('getPreviewUrl', () => {
  expect(selectors.getPreviewUrl())
    .toEqual(selectors.initialState.previewUrl)
  expect(selectors.getPreviewUrl({}))
    .toEqual(selectors.initialState.previewUrl)
  expect(selectors.getPreviewUrl(selectors.initialState))
    .toEqual(selectors.initialState.previewUrl)
})
