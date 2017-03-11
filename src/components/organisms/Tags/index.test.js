import React from 'react'
import { mount } from 'enzyme'
import Tags from '.'


const wrap = (props = {}) => mount(<Tags {...props} />)

it('does not render props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(0)
})
