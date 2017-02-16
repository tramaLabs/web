import React from 'react'
import { shallow } from 'enzyme'
import IconButtonClipboard from '.'

const copy = jest.fn()
jest.setMock('copy-to-clipboard', copy)

it('copies text to clipboard', () => {
  const wrapper = shallow(<IconButtonClipboard text="http://www.link.com" />).shallow()
  wrapper.simulate('click')
  expect(copy).toBeCalledWith('http://www.link.com')
})

it('sets state when text has been succesfully copied', () => {
  const wrapper = shallow(<IconButtonClipboard text="http://www.link.com" />).shallow()
  jest.useFakeTimers()
  copy.mockReturnValue(true)

  expect(wrapper.state('copied')).toBeFalsy()

  wrapper.simulate('click')

  expect(wrapper.state('copied')).toBe(true)

  jest.runAllTimers()
  wrapper.update()
  expect(wrapper.state('copied')).toBe(false)
})
