import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    currentDetail: null
  })
})

test('getCurrentDetail', () => {
  expect(selectors.getCurrentDetail()).toEqual(selectors.initialState.currentDetail)
  expect(selectors.getCurrentDetail(selectors.initialState))
    .toEqual(selectors.initialState.currentDetail)
})
