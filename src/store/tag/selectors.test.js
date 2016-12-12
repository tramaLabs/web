import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    ids: []
  })
})

test('getIds', () => {
  expect(selectors.getIds()).toEqual(selectors.initialState.ids)
  expect(selectors.getIds({})).toEqual(selectors.initialState.ids)
  expect(selectors.getIds(selectors.initialState)).toEqual(selectors.initialState.ids)
})
