import React from 'react'
import { shallow } from 'enzyme'
import Menu from '.'

const wrap = (props = {}) => shallow(<Menu {...props}>test</Menu>).dive()

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders when right is passed in', () => {
  wrap({ right: true })
})
