import * as actions from './actions'

test('tagCreate', () => {
  expect(actions.tagCreate.request({ id: 1, title: 'test' })).toEqual({
    type: actions.TAG_CREATE_REQUEST,
    data: {
      id: 1,
      title: 'test'
    }
  })

  expect(actions.tagCreate.success(1)).toEqual({
    type: actions.TAG_CREATE_SUCCESS,
    detail: 1
  })

  expect(actions.tagCreate.failure('test')).toEqual({
    type: actions.TAG_CREATE_FAILURE,
    error: 'test'
  })
})

test('tagListRead', () => {
  expect(actions.tagListRead.request({ limit: 3 })).toEqual({
    type: actions.TAG_LIST_READ_REQUEST,
    params: { limit: 3 }
  })

  expect(actions.tagListRead.success([1, 2])).toEqual({
    type: actions.TAG_LIST_READ_SUCCESS,
    list: [1, 2]
  })

  expect(actions.tagListRead.failure('test')).toEqual({
    type: actions.TAG_LIST_READ_FAILURE,
    error: 'test'
  })
})

test('tagListExtract', () => {
  expect(actions.tagListExtract.request('test')).toEqual({
    type: actions.TAG_LIST_EXTRACT_REQUEST,
    text: 'test'
  })

  expect(actions.tagListExtract.success([1, 2])).toEqual({
    type: actions.TAG_LIST_EXTRACT_SUCCESS,
    list: [1, 2]
  })

  expect(actions.tagListExtract.failure('test')).toEqual({
    type: actions.TAG_LIST_EXTRACT_FAILURE,
    error: 'test'
  })
})
