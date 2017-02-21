import React from 'react'
import { shallow } from 'enzyme'
import InputClipboard from '.'

const wrap = (props = {}) => shallow(<InputClipboard text="http://www.link.com" {...props} />)


it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
