import React from 'react'
import { shallow } from 'enzyme'
import Feedback from '.'

const wrap = (props = {}) => shallow(<Feedback {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' }).length).toBeGreaterThan(0)
})
