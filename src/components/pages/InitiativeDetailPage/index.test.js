import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailPage from '.'

const initiative = {
  description: 'test description'
}

const wrap = (props = {}) => shallow(<InitiativeDetailPage {...props} />)

it('renders initiative description when passed in', () => {
  const wrapper = wrap({ initiative })
  expect(wrapper.contains('test description')).toBe(true)
})
