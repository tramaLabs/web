import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailHeader from '.'

const initiative = {
  title: 'test title',
  tags: [{ name: 'tag 1' }, { name: 'tag 2' }]
}

const wrap = (props = {}) =>
  shallow(<InitiativeDetailHeader initiative={initiative} {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders initiative title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test title')).toBe(true)
})
