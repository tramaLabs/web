import React from 'react'
import { shallow } from 'enzyme'
import SharePanelModal from '.'

const initiative = {}

const wrap = (props = {}) => shallow(<SharePanelModal initiative={initiative} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

