import * as actions from './actions'

test('authLogin', () => {
  expect(actions.authLogin.prepare('facebook', 1)).toEqual({
    type: actions.AUTH_LOGIN_PREPARE,
    service: 'facebook',
    options: 1
  })

  expect(actions.authLogin.request('facebook')).toEqual({
    type: actions.AUTH_LOGIN_REQUEST,
    service: 'facebook'
  })

  expect(actions.authLogin.success(1)).toEqual({
    type: actions.AUTH_LOGIN_SUCCESS,
    token: 1
  })

  expect(actions.authLogin.failure('test')).toEqual({
    type: actions.AUTH_LOGIN_FAILURE,
    error: 'test'
  })
})

test('authLogout', () => {
  expect(actions.authLogout()).toEqual({ type: actions.AUTH_LOGOUT })
})
