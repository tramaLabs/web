import React from 'react'
import { shallow } from 'enzyme'
import YouseLink from '.'

const wrap = (props = {}) => shallow(<YouseLink {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ width: 100, height: 50 })
  expect(wrapper.find({ width: 100 })).toHaveLength(1)
  expect(wrapper.find({ height: 50 })).toHaveLength(1)
})
