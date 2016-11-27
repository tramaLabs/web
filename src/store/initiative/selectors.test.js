import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    list: [],
    item: null
  })
})

test('getList', () => {
  expect(selectors.getList()).toEqual(selectors.initialState.list)
  expect(selectors.getList({})).toEqual(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toEqual(selectors.initialState.list)
})

test('getItem', () => {
  expect(selectors.getItem()).toEqual(selectors.initialState.item)
  expect(selectors.getItem({})).toEqual(selectors.initialState.item)
  expect(selectors.getItem(selectors.initialState)).toEqual(selectors.initialState.item)
})
