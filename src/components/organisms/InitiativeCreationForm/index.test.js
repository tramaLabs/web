import React from 'react'
import { shallow } from 'enzyme'
import InitiativeCreationForm from '.'

const handleSubmit = jest.fn()

const wrap = (props = {}) => shallow(
  <InitiativeCreationForm handleSubmit={handleSubmit} {...props} />
)

it('renders error when passed in', () => {
  const wrapper = wrap({ error: 'test error' })
  expect(wrapper.contains('test error')).toBe(true)
})

it('does not render submit button when not connected', () => {
  const wrapper = wrap()
  expect(wrapper.find({ type: 'submit' }).length).toBe(0)
})

it('renders submit button when connected', () => {
  const wrapper = wrap({ connected: true })
  expect(wrapper.find({ type: 'submit' }).length).toBeGreaterThan(0)
})

it('calls renderSubmit when submitted', () => {
  handleSubmit.mockClear()
  const wrapper = wrap()
  expect(handleSubmit).not.toBeCalled()
  wrapper.simulate('submit')
  expect(handleSubmit).toBeCalled()
})

it('disables button while submitting', () => {
  const wrapper = wrap({ connected: true })
  expect(wrapper.find({ disabled: true }).length).toBe(0)
  wrapper.setProps({ submitting: true })
  expect(wrapper.find({ disabled: true }).length).toBeGreaterThan(0)
})
