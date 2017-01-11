import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    message: undefined,
    palette: undefined,
    show: false
  })
})

test('getMessage', () => {
  expect(selectors.getMessage()).toEqual(selectors.initialState.message)
  expect(selectors.getMessage({})).toEqual(selectors.initialState.message)
  expect(selectors.getMessage(selectors.initialState)).toEqual(selectors.initialState.message)
})

test('getPalette', () => {
  expect(selectors.getPalette()).toEqual(selectors.initialState.palette)
  expect(selectors.getPalette({})).toEqual(selectors.initialState.palette)
  expect(selectors.getPalette(selectors.initialState)).toEqual(selectors.initialState.palette)
})

test('toShow', () => {
  expect(selectors.toShow()).toEqual(selectors.initialState.show)
  expect(selectors.toShow({})).toEqual(selectors.initialState.show)
  expect(selectors.toShow(selectors.initialState)).toEqual(selectors.initialState.show)
})
