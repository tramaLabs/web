import * as selectors from './selectors'

const initialState = {
  initiatives: {},
  users: {},
  tags: {}
}

const normalizedState = {
  initiatives: {
    1: {
      id: 1,
      user: 1,
      title: 'test initiative',
      tags: [1]
    },
    2: {
      id: 2,
      user: 1,
      title: 'test initiative 2',
      tags: [1, 2]
    }
  },
  users: {
    1: {
      id: 1,
      name: 'test user'
    }
  },
  tags: {
    1: {
      id: 1,
      name: 'test tag'
    },
    2: {
      id: 2,
      name: 'test tag 2'
    }
  }
}

const denormalizedState = {
  initiatives: Object.keys(normalizedState.initiatives).map((i) => ({
    ...normalizedState.initiatives[i],
    user: { ...normalizedState.users[normalizedState.initiatives[i].user] },
    tags: normalizedState.initiatives[i].tags.map((id) => normalizedState.tags[id])
  })),
  users: Object.keys(normalizedState.users).map((i) => normalizedState.users[i]),
  tags: Object.keys(normalizedState.tags).map((i) => normalizedState.tags[i])
}

test('initialState', () => {
  expect(selectors.initialState).toEqual(initialState)
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

test('getNormalizedTags', () => {
  expect(selectors.getNormalizedTags()).toEqual({})
  expect(selectors.getNormalizedTags({})).toEqual({})
  expect(selectors.getNormalizedTags(initialState)).toEqual(initialState.tags)
  expect(selectors.getNormalizedTags(normalizedState)).toEqual(normalizedState.tags)
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
  expect(selectors.getUsers(normalizedState, [1])).toEqual([denormalizedState.users[0]])
})

test('getUser', () => {
  expect(selectors.getUser()).toBeUndefined()
  expect(selectors.getUser(initialState)).toBeUndefined()
  expect(selectors.getUser(initialState, 1)).toBeUndefined()
  expect(selectors.getUser(normalizedState)).toBeUndefined()
  expect(selectors.getUser(normalizedState, 1)).toEqual(denormalizedState.users[0])
})

test('getTags', () => {
  expect(selectors.getTags()).toEqual([])
  expect(selectors.getTags({})).toEqual([])
  expect(selectors.getTags(initialState)).toEqual([])
  expect(selectors.getTags(normalizedState)).toEqual(denormalizedState.tags)
  expect(selectors.getTags(normalizedState, [1])).toEqual([denormalizedState.tags[0]])
})

test('getTag', () => {
  expect(selectors.getTag()).toBeUndefined()
  expect(selectors.getTag(initialState)).toBeUndefined()
  expect(selectors.getTag(initialState, 1)).toBeUndefined()
  expect(selectors.getTag(normalizedState)).toBeUndefined()
  expect(selectors.getTag(normalizedState, 1)).toEqual(denormalizedState.tags[0])
})
