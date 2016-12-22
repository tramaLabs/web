import React from 'react'
import { mount, shallow } from 'enzyme'
import InitiativeDetailInfo from '.'

const initiative = {
  summary: 'test summary'
}

const wrap = (props = {}) => shallow(<InitiativeDetailInfo initiative={initiative} {...props} />)

it('mounts', () => {
  mount(<InitiativeDetailInfo initiative={initiative} />)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders initiative summary', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test summary')).toBe(true)
})
