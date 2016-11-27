import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    initiatives: {},
    users: {}
  })
})

test('getInitiatives', () => {
  expect(selectors.getInitiatives()).toEqual({})
  expect(selectors.getInitiatives({})).toEqual({})
  expect(selectors.getInitiatives({ initiatives: { 1: 1 } })).toEqual({ 1: 1 })
})

test('getInitiative', () => {
  expect(selectors.getInitiative()).toBeUndefined()
  expect(selectors.getInitiative({ initiatives: { 1: 1 } }, 1)).toEqual(1)
})

test('getUsers', () => {
  expect(selectors.getUsers()).toEqual({})
  expect(selectors.getUsers({})).toEqual({})
  expect(selectors.getUsers({ users: { 1: 1 } })).toEqual({ 1: 1 })
})

test('getUser', () => {
  expect(selectors.getUser()).toBeUndefined()
  expect(selectors.getUser({ users: { 1: 1 } }, 1)).toEqual(1)
})
