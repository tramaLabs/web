import React from 'react'
import { shallow } from 'enzyme'
import TagLink from '.'

const wrap = (props = {}) => shallow(<TagLink {...props}>test</TagLink>).dive()

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
