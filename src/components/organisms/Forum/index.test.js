import React from 'react'
import { shallow } from 'enzyme'
import Forum from '.'

const initiative = {
  title: 'test initiative',
  tags: [],
  photo: {}
}

const wrap = (props = {}) => shallow(<Forum initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
