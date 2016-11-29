import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    currentId: null
  })
})

test('getCurrentId', () => {
  expect(selectors.getCurrentId()).toEqual(selectors.initialState.currentId)
  expect(selectors.getCurrentId(selectors.initialState)).toEqual(selectors.initialState.currentId)
})
