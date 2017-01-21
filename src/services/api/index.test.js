import axios from 'axios'
import { stub, spy } from 'sinon'

const request = spy()
const defaults = { headers: { common: {} } }
const interceptors = { response: { use: () => {} } }

stub(axios, 'create', () => ({ request, defaults, interceptors }))

const api = require('.').default

beforeEach(() => {
  request.reset()
})

test('setToken', () => {
  expect(defaults.headers.common).toEqual({})
  api.setToken(1)
  expect(defaults.headers.common.Authorization).toBe('Bearer 1')
})

test('unsetToken', () => {
  defaults.headers.common.Authorization = 1
  api.unsetToken()
  expect(defaults.headers.common.Authorization).toBeUndefined()
})

test('get', () => {
  expect(request.called).toBe(false)
  api.get('/test', { foo: 'bar' })
  expect(request.calledWith({
    method: 'get',
    url: '/test',
    foo: 'bar'
  })).toBe(true)
})

test('post', () => {
  expect(request.called).toBe(false)
  api.post('/test', { title: 'test' }, { foo: 'bar' })
  expect(request.calledWith({
    method: 'post',
    url: '/test',
    foo: 'bar',
    data: { title: 'test' }
  })).toBe(true)
})
