import React from 'react'
import { shallow } from 'enzyme'
import InitiativeUserListModal from '.'

const initiative = {
  users: [
    { id: 0, name: 'Jeane', picture: 'jeane.jpg' },
    { id: 1, name: 'Diego', picture: 'diego.jpg' }
  ]
}

const wrap = (props = {}) => shallow(<InitiativeUserListModal initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders user names', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Jeane')).toBe(true)
  expect(wrapper.contains('Diego')).toBe(true)
})

it('renders user pictures', () => {
  const wrapper = wrap()
  expect(wrapper.find({ src: 'jeane.jpg' })).toHaveLength(1)
  expect(wrapper.find({ src: 'diego.jpg' })).toHaveLength(1)
})
