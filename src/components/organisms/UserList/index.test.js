import React from 'react'
import { shallow } from 'enzyme'
import UserList from '.'

const users = [
    { id: 0, name: 'Jeane', picture: 'jeane.jpg', services: { facebook: 'jeane' } },
    { id: 1, name: 'Diego', picture: 'diego.jpg', services: { facebook: 'diego' } }
]

const onOpenUserListModal = jest.fn()

const modalName = 'testModal'

const modalTitle = 'Test Modal'

const defaultProps = { users, onOpenUserListModal, modalTitle, modalName }

const wrap = (props = {}) => shallow(<UserList {...defaultProps} {...props} />)

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
  const button = wrapper.find({ onClick: onOpenUserListModal })
  expect(onOpenUserListModal).not.toBeCalled()
  button.simulate('click')
  expect(onOpenUserListModal).toBeCalled()
})
