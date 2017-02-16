import React from 'react'
import { shallow } from 'enzyme'
import IconButtonClipboard from '.'

const wrap = (props = {}) => shallow(<IconButtonClipboard text="http://www.link.com" {...props} />)


it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})


/*
const mockCopy = jest.fn()
jest.mock('copy-to-clipboard', () => ({ default: mockCopy }))


it('copies text to clipboard', () => {
  const wrapper = shallow(<IconButtonClipboard text="http://www.link.com" />)
  wrapper.simulate('click')
  expect(mockCopy).toBeCalledWith('http://www.link.com')
})

it('sets state when text has been succesfully copied', () => {
  const wrapper = shallow(<IconButtonClipboard text="http://www.link.com" />)
  jest.useFakeTimers()
  mockCopy.mockReturnValue(true)

  expect(wrapper.state('copied')).toBeFalsy()

  wrapper.simulate('click')

  expect(wrapper.state('copied')).toBe(true)

  jest.runAllTimers()
  wrapper.update()
  expect(wrapper.state('copied')).toBe(false)
})
*/
