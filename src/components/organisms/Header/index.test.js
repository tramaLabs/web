import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

const wrap = (props = {}) => shallow(<Header {...props} />).dive()

it('renders with different props', () => {
  wrap({ transparent: true })
  wrap({ hideSearch: false }).find({ hideSearch: false }).dive()
  wrap({ hideSearch: true }).find({ hideSearch: true }).dive()
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
