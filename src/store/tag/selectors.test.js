import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    ids: [],
    id: null
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
