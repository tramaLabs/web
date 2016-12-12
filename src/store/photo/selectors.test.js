import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    progress: 0
  })
})

test('getProgress', () => {
  expect(selectors.getProgress()).toEqual(selectors.initialState.progress)
  expect(selectors.getProgress({})).toEqual(selectors.initialState.progress)
  expect(selectors.getProgress(selectors.initialState)).toEqual(selectors.initialState.progress)
})
