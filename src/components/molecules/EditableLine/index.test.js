import React from 'react'
import { shallow } from 'enzyme'
import EditableLine from '.'

const wrap = (props = {}) => shallow(<EditableLine {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('changes state on change', () => {
  const wrapper = wrap()
  wrapper.simulate('change', {})
  expect(wrapper.state('editorState')).toEqual({})
})
