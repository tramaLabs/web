import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailInfoModal from '.'

const wrap = (props = {}) => shallow(<InitiativeDetailInfoModal {...props} />)

it('renders props when passed in', () => {
  const props = {
    title: 'My Modal',
    initiative: {
      id: 123,
      title: 'Super Initiative'
    },
    handleSubmit: () => {}
  }
  const wrapper = wrap(props)
  expect(wrapper.find({ title: 'My Modal' })).toHaveLength(1)
})
