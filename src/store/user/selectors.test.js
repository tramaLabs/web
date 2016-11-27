import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    current: null
  })
})

test('getCurrent', () => {
  expect(selectors.getCurrent()).toEqual(selectors.initialState.current)
  expect(selectors.getCurrent(selectors.initialState)).toEqual(selectors.initialState.current)
})
