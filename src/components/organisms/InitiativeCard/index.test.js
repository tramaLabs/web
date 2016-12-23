import React from 'react'
import { mount, shallow } from 'enzyme'
import InitiativeCard from '.'

const initiative = {
  title: 'test initiative',
  tags: [],
  photo: {}
}

const wrap = (props = {}) => shallow(<InitiativeCard initiative={initiative} {...props} />)

it('mounts', () => {
  mount(<InitiativeCard initiative={initiative} />)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders photo when passed in', () => {
  const wrapper = wrap({ initiative: { ...initiative, photo: { small: 'test.jpg' } } })
  expect(wrapper.find({ src: 'test.jpg' })).toHaveLength(1)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test initiative')).toBe(true)
})
