import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    message: undefined,
    kind: undefined,
    show: false
  })
})

test('getMessage', () => {
  expect(selectors.getMessage()).toEqual(selectors.initialState.message)
  expect(selectors.getMessage({})).toEqual(selectors.initialState.message)
  expect(selectors.getMessage(selectors.initialState)).toEqual(selectors.initialState.message)
})

test('getKind', () => {
  expect(selectors.getKind()).toEqual(selectors.initialState.kind)
  expect(selectors.getKind({})).toEqual(selectors.initialState.kind)
  expect(selectors.getKind(selectors.initialState)).toEqual(selectors.initialState.kind)
})

test('toShow', () => {
  expect(selectors.toShow()).toEqual(selectors.initialState.show)
  expect(selectors.toShow({})).toEqual(selectors.initialState.show)
  expect(selectors.toShow(selectors.initialState)).toEqual(selectors.initialState.show)
})
