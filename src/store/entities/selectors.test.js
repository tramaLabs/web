import * as selectors from './selectors'

const initialState = {
  initiatives: {},
  photos: {},
  tags: {},
  users: {}
}

const normalizedState = {
  initiatives: {
    1: {
      id: 1,
      user: 1,
      title: 'test initiative',
      photo: 1,
      tags: [1]
    },
    2: {
      id: 2,
      user: 1,
      title: 'test initiative 2',
      photo: 1,
      tags: [1, 2]
    }
  },
  photos: {
    1: {
      id: 1,
      title: 'test photo'
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
    photo: { ...normalizedState.photos[normalizedState.initiatives[i].photo] },
    tags: normalizedState.initiatives[i].tags.map((id) => normalizedState.tags[id]),
    user: { ...normalizedState.users[normalizedState.initiatives[i].user] }
  })),
  photos: Object.keys(normalizedState.photos).map((i) => normalizedState.photos[i]),
  tags: Object.keys(normalizedState.tags).map((i) => normalizedState.tags[i]),
  users: Object.keys(normalizedState.users).map((i) => normalizedState.users[i])
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

test('getNormalizedPhotos', () => {
  expect(selectors.getNormalizedPhotos()).toEqual({})
  expect(selectors.getNormalizedPhotos({})).toEqual({})
  expect(selectors.getNormalizedPhotos(initialState)).toEqual(initialState.photos)
  expect(selectors.getNormalizedPhotos(normalizedState)).toEqual(normalizedState.photos)
})

test('getNormalizedTags', () => {
  expect(selectors.getNormalizedTags()).toEqual({})
  expect(selectors.getNormalizedTags({})).toEqual({})
  expect(selectors.getNormalizedTags(initialState)).toEqual(initialState.tags)
  expect(selectors.getNormalizedTags(normalizedState)).toEqual(normalizedState.tags)
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

test('getPhotos', () => {
  expect(selectors.getPhotos()).toEqual([])
  expect(selectors.getPhotos({})).toEqual([])
  expect(selectors.getPhotos(initialState)).toEqual([])
  expect(selectors.getPhotos(normalizedState)).toEqual(denormalizedState.photos)
  expect(selectors.getPhotos(normalizedState, [1])).toEqual([denormalizedState.photos[0]])
})

test('getPhoto', () => {
  expect(selectors.getPhoto()).toBeUndefined()
  expect(selectors.getPhoto(initialState)).toBeUndefined()
  expect(selectors.getPhoto(initialState, 1)).toBeUndefined()
  expect(selectors.getPhoto(normalizedState)).toBeUndefined()
  expect(selectors.getPhoto(normalizedState, 1)).toEqual(denormalizedState.photos[0])
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
