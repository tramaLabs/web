import axios from 'axios'
import { stub, spy } from 'sinon'

const request = spy()
const defaults = { headers: { common: {} } }

stub(axios, 'create', () => ({ request, defaults }))

const { api, setToken, unsetToken, get, post } = require('.')

beforeEach(() => {
  request.reset()
})

test('setToken', () => {
  expect(api.defaults.headers.common).toEqual({})
  setToken(1)
  expect(api.defaults.headers.common['Authorization']).toBe('Bearer 1')
})

test('unsetToken', () => {
  api.defaults.headers.common['Authorization'] = 1
  unsetToken()
  expect(api.defaults.headers.common['Authorization']).toBeUndefined()
})

test('get', () => {
  expect(request.called).toBe(false)
  get('/test', { foo: 'bar' })
  expect(request.calledWith({
    method: 'get',
    url: '/test',
    foo: 'bar'
  })).toBe(true)
})

test('post', () => {
  expect(request.called).toBe(false)
  post('/test', { title: 'test' }, { foo: 'bar' })
  expect(request.calledWith({
    method: 'post',
    url: '/test',
    foo: 'bar',
    data: { title: 'test' }
  })).toBe(true)
})
