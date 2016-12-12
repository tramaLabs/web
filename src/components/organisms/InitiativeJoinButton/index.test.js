import React from 'react'
import { shallow } from 'enzyme'
import InitiativeJoinButton from '.'

const initiative = { user: { id: 1 }, users: [{ id: 1 }, { id: 2 }] }
const onLeave = jest.fn()
const onJoin = jest.fn()

const wrap = (props = {}) =>
  shallow(<InitiativeJoinButton {...{ initiative, onLeave, onJoin }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders one button when user is the author', () => {
  const wrapper = wrap({ user: { id: 1 } })
  expect(wrapper.children()).toHaveLength(1)
})

it('renders two buttons when user is a collaborator', () => {
  const wrapper = wrap({ user: { id: 2 } })
  expect(wrapper.children()).toHaveLength(2)
})

it('calls onLeave when collaborator clicks the cancel button', () => {
  const wrapper = wrap({ user: { id: 2 } })
  expect(onLeave).not.toBeCalled()
  wrapper.findWhere((el) => el.prop('onClick')).simulate('click')
  expect(onLeave).toBeCalled()
})

it('renders one button when user is not a collaborator', () => {
  const wrapper = wrap({ user: { id: 3 } })
  expect(wrapper.children()).toHaveLength(1)
})

it('calls onJoin when non collaborator clicks the join button', () => {
  const wrapper = wrap({ user: { id: 3 } })
  expect(onJoin).not.toBeCalled()
  wrapper.findWhere((el) => el.prop('onClick')).simulate('click')
  expect(onJoin).toBeCalled()
})
