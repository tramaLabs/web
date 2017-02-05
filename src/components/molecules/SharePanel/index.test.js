import React from 'react'
import { shallow } from 'enzyme'
import SharePanel from '.'

const initiative = { title: 'initiative' }

const wrap = (props = {}) => shallow(<SharePanel initiative={initiative} {...props} />).dive()


it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})
