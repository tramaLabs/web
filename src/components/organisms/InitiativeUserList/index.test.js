import React from 'react'
import { shallow } from 'enzyme'
import InitiativeUserList from '.'

const initiative = {
  users: [
    { name: 'Jeane', picture: 'jeane.jpg' },
    { name: 'Diego', picture: 'diego.jpg' }
  ]
}

const onOpenInitiativeUserListModal = jest.fn()

const defaultProps = { initiative, onOpenInitiativeUserListModal }

const wrap = (props = {}) => shallow(<InitiativeUserList {...defaultProps} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders user pictures', () => {
  const wrapper = wrap()
  expect(wrapper.find({ src: 'jeane.jpg' })).toHaveLength(1)
  expect(wrapper.find({ src: 'diego.jpg' })).toHaveLength(1)
})

it('renders initiative user list modal open button', () => {
  const wrapper = wrap()
  const button = wrapper.find({ onClick: onOpenInitiativeUserListModal })
  expect(onOpenInitiativeUserListModal).not.toBeCalled()
  button.simulate('click')
  expect(onOpenInitiativeUserListModal).toBeCalled()
})
