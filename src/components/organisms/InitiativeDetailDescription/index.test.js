import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailDescription from '.'

const initiative = {
  description: 'foo'
}

const wrap = (props = {}) => shallow(<InitiativeDetailDescription initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders initiative description', () => {
  const wrapper = wrap()
  expect(wrapper.contains('foo')).toBe(true)
})
