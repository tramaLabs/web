import React from 'react'
import { mount, shallow } from 'enzyme'
import Modal from '.'

const wrap = (props = {}) => shallow(<Modal {...props} />)

it('renders modal', () => {
  mount(<Modal />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})

it('has initial state', () => {
  const wrapper = wrap()
  expect(wrapper.state()).toEqual({ open: false })
})

test('open', () => {
  const wrapper = wrap()
  expect(wrapper.state('open')).toBe(false)
  wrapper.instance().open()
  expect(wrapper.state('open')).toBe(true)
})

test('close', () => {
  const wrapper = wrap()
  expect(wrapper.state('open')).toBe(false)
  wrapper.setState({ open: true })
  expect(wrapper.state('open')).toBe(true)
  wrapper.instance().close()
  expect(wrapper.state('open')).toBe(false)
})

test('toggle', () => {
  const wrapper = wrap()
  expect(wrapper.state('open')).toBe(false)
  wrapper.instance().toggle()
  expect(wrapper.state('open')).toBe(true)
  wrapper.instance().toggle()
  expect(wrapper.state('open')).toBe(false)
})
