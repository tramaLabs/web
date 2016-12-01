import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from '.'

const handleSubmit = jest.fn()

const wrap = (props = {}) => shallow(<SearchForm handleSubmit={handleSubmit} {...props} />)

it('calls renderSubmit when submitted', () => {
  handleSubmit.mockClear()
  const wrapper = wrap()
  expect(handleSubmit).not.toBeCalled()
  wrapper.simulate('submit')
  expect(handleSubmit).toBeCalled()
})
