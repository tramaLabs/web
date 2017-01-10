import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    message: undefined,
    color: undefined,
    show: false
  })
})

test('getMessage', () => {
  expect(selectors.getMessage()).toEqual(selectors.initialState.message)
  expect(selectors.getMessage({})).toEqual(selectors.initialState.message)
  expect(selectors.getMessage(selectors.initialState)).toEqual(selectors.initialState.message)
})

test('getColor', () => {
  expect(selectors.getColor()).toEqual(selectors.initialState.color)
  expect(selectors.getColor({})).toEqual(selectors.initialState.color)
  expect(selectors.getColor(selectors.initialState)).toEqual(selectors.initialState.color)
})

test('toShow', () => {
  expect(selectors.toShow()).toEqual(selectors.initialState.show)
  expect(selectors.toShow({})).toEqual(selectors.initialState.show)
  expect(selectors.toShow(selectors.initialState)).toEqual(selectors.initialState.show)
})
