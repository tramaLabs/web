import React from 'react'
import { shallow } from 'enzyme'
import MenuItem from '.'

const wrap = (props = {}) => shallow(<MenuItem {...props}>test</MenuItem>)

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})
