import * as actions from './actions'

test('initiativeRetrieve', () => {
  expect(actions.initiativeRetrieve.request(3)).toEqual({
    type: actions.INITIATIVE_RETRIEVE_REQUEST,
    id: 3
  })

  expect(actions.initiativeRetrieve.success({ result: 1, entities: 1 })).toEqual({
    type: actions.INITIATIVE_RETRIEVE_SUCCESS,
    result: 1,
    entities: 1
  })

  expect(actions.initiativeRetrieve.failure('test')).toEqual({
    type: actions.INITIATIVE_RETRIEVE_FAILURE,
    error: 'test'
  })
})

test('initiativeList', () => {
  expect(actions.initiativeList.request({ limit: 3 })).toEqual({
    type: actions.INITIATIVE_LIST_REQUEST,
    params: { limit: 3 }
  })

  expect(actions.initiativeList.success({ result: [1, 2], entities: [1, 2] })).toEqual({
    type: actions.INITIATIVE_LIST_SUCCESS,
    result: [1, 2],
    entities: [1, 2]
  })

  expect(actions.initiativeList.failure('test')).toEqual({
    type: actions.INITIATIVE_LIST_FAILURE,
    error: 'test'
  })
})

test('initiativeUpdate', () => {
  expect(actions.initiativeUpdate.request(3, { id: 1 })).toEqual({
    type: actions.INITIATIVE_UPDATE_REQUEST,
    id: 3,
    data: { id: 1 }
  })

  expect(actions.initiativeUpdate.success({ result: 1, entities: 1 })).toEqual({
    type: actions.INITIATIVE_UPDATE_SUCCESS,
    result: 1,
    entities: 1
  })

  expect(actions.initiativeUpdate.failure('test')).toEqual({
    type: actions.INITIATIVE_UPDATE_FAILURE,
    error: 'test'
  })
})

test('initiativeCreate', () => {
  expect(actions.initiativeCreate.request({ id: 1, title: 'test' })).toEqual({
    type: actions.INITIATIVE_CREATE_REQUEST,
    data: {
      id: 1,
      title: 'test'
    }
  })

  expect(actions.initiativeCreate.success({ result: 1, entities: 1 })).toEqual({
    type: actions.INITIATIVE_CREATE_SUCCESS,
    result: 1,
    entities: 1
  })

  expect(actions.initiativeCreate.failure('test')).toEqual({
    type: actions.INITIATIVE_CREATE_FAILURE,
    error: 'test'
  })
})
