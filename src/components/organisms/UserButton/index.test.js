import React from 'react'
import { shallow } from 'enzyme'
import UserButton from '.'

const onUserLogout = jest.fn()
const user = { picture: 'test.jpg', name: 'Test Name' }
const wrap = (props = {}) => shallow(<UserButton onUserLogout={onUserLogout} {...props} />)

it('renders', () => {
  wrap()
})

it('renders props when user is passed in', () => {
  const wrapper = wrap({ user, id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders user name and picture when user is passed in', () => {
  const wrapper = wrap({ user })
  expect(wrapper.contains(user.name)).toBe(true)
  expect(wrapper.find({ src: user.picture })).toHaveLength(1)
})

it('calls onUserLogout when selection', () => {
  onUserLogout.mockClear()
  const wrapper = wrap({ user })
  expect(onUserLogout).not.toBeCalled()
  wrapper.simulate('selection', onUserLogout)
  expect(onUserLogout).toBeCalled()
})
