import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailUser from '.'

const initiative = {
  user: { name: 'Jeane', picture: 'jeane.jpg' }
}

const wrap = (props = {}) => shallow(<InitiativeDetailUser initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders user picture', () => {
  const wrapper = wrap()
  expect(wrapper.find({ src: 'jeane.jpg' })).toHaveLength(1)
})

it('renders user name', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Jeane')).toBe(true)
})
