import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    token: null
  })
})

test('getToken', () => {
  expect(selectors.getToken()).toBeNull()
  expect(selectors.getToken({})).toBeNull()
  expect(selectors.getToken(selectors.initialState)).toEqual(selectors.initialState.token)
})
