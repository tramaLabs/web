import * as selectors from './selectors'

const initialState = {
  initiatives: {},
  users: {}
}

const normalizedState = {
  initiatives: {
    1: {
      id: 1,
      user: 1,
      title: 'test initiative'
    },
    2: {
      id: 2,
      user: 1,
      title: 'test initiative 2'
    }
  },
  users: {
    1: {
      id: 1,
      name: 'test user'
    }
  }
}

const denormalizedState = {
  initiatives: Object.keys(normalizedState.initiatives).map((i) => ({
    ...normalizedState.initiatives[i],
    user: { ...normalizedState.users[normalizedState.initiatives[i].user] }
  })),
  users: Object.keys(normalizedState.users).map((i) => normalizedState.users[i])
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    initiatives: {},
    users: {}
  })
})

test('getNormalizedInitiatives', () => {
  expect(selectors.getNormalizedInitiatives()).toEqual({})
  expect(selectors.getNormalizedInitiatives({})).toEqual({})
  expect(selectors.getNormalizedInitiatives(initialState)).toEqual(initialState.initiatives)
  expect(selectors.getNormalizedInitiatives(normalizedState)).toEqual(normalizedState.initiatives)
})

test('getNormalizedUsers', () => {
  expect(selectors.getNormalizedUsers()).toEqual({})
  expect(selectors.getNormalizedUsers({})).toEqual({})
  expect(selectors.getNormalizedUsers(initialState)).toEqual(initialState.users)
  expect(selectors.getNormalizedUsers(normalizedState)).toEqual(normalizedState.users)
})

test('getInitiatives', () => {
  expect(selectors.getInitiatives()).toEqual([])
  expect(selectors.getInitiatives({})).toEqual([])
  expect(selectors.getInitiatives(initialState)).toEqual([])
  expect(selectors.getInitiatives(normalizedState)).toEqual(denormalizedState.initiatives)
  expect(selectors.getInitiatives(normalizedState, [1])).toEqual([denormalizedState.initiatives[0]])
})

test('getInitiative', () => {
  expect(selectors.getInitiative()).toBeUndefined()
  expect(selectors.getInitiative(initialState)).toBeUndefined()
  expect(selectors.getInitiative(initialState, 1)).toBeUndefined()
  expect(selectors.getInitiative(normalizedState)).toBeUndefined()
  expect(selectors.getInitiative(normalizedState, 1)).toEqual(denormalizedState.initiatives[0])
})

test('getUsers', () => {
  expect(selectors.getUsers()).toEqual([])
  expect(selectors.getUsers({})).toEqual([])
  expect(selectors.getUsers(initialState)).toEqual([])
  expect(selectors.getUsers(normalizedState)).toEqual(denormalizedState.users)
  expect(selectors.getUsers(normalizedState)).toEqual([denormalizedState.users[0]])
})

test('getUser', () => {
  expect(selectors.getUser()).toBeUndefined()
  expect(selectors.getUser(initialState)).toBeUndefined()
  expect(selectors.getUser(initialState, 1)).toBeUndefined()
  expect(selectors.getUser(normalizedState)).toBeUndefined()
  expect(selectors.getUser(normalizedState, 1)).toEqual(denormalizedState.users[0])
})
