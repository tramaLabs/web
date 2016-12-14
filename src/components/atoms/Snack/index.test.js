import React from 'react'
import { shallow } from 'enzyme'
import Snack from '.'

const wrap = (props = {}) => shallow(<Snack {...props} />)

it('renders with different props', () => {
  wrap({ light: true })
  wrap({ show: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' }).length).toBeGreaterThan(0)
})
