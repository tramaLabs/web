import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDescription from '.'

const initiative = {
  description: 'foo'
}

const wrap = (props = {}) => shallow(<InitiativeDescription initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders initiative description', () => {
  const wrapper = wrap()
  expect(wrapper.contains('foo')).toBe(true)
})
