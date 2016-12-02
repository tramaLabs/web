import React from 'react'
import { shallow } from 'enzyme'
import Menu from '.'

const wrap = (props = {}) => shallow(<Menu {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' }).length).toBeGreaterThan(0)
})

it('renders when right is passed in', () => {
  wrap({ right: true })
})
