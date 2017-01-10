import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    token: null
  })
})

test('getToken', () => {
  expect(selectors.getToken()).toEqual(selectors.initialState.token)
  expect(selectors.getToken(selectors.initialState)).toEqual(selectors.initialState.token)
})
