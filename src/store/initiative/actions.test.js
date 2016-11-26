import * as actions from './actions'

test('initiativeList', () => {
  expect(actions.initiativeList.request(3)).toEqual({
    type: actions.INITIATIVE_LIST_REQUEST,
    limit: 3
  })

  expect(actions.initiativeList.success([1, 2, 3])).toEqual({
    type: actions.INITIATIVE_LIST_SUCCESS,
    list: [1, 2, 3]
  })

  expect(actions.initiativeList.failure('test')).toEqual({
    type: actions.INITIATIVE_LIST_FAILURE,
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

  expect(actions.initiativeCreate.success({ id: 2, title: 'test 2' })).toEqual({
    type: actions.INITIATIVE_CREATE_SUCCESS,
    data: {
      id: 2,
      title: 'test 2'
    }
  })

  expect(actions.initiativeCreate.failure('test')).toEqual({
    type: actions.INITIATIVE_CREATE_FAILURE,
    error: 'test'
  })
})
