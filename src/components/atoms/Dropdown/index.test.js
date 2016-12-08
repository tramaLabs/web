import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from '.'

const wrap = (props = {}) => shallow(<Dropdown onSelection={() => {}} {...props}>test</Dropdown>)

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})
