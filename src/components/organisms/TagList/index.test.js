import React from 'react'
import { mount } from 'enzyme'
import TagList from '.'

const tags = [
  { id: 0, name: 'tag 0' },
  { id: 1, name: 'tag 1' },
  { id: 2, name: 'tag 2' },
  { id: 3, name: 'tag 3' },
  { id: 4, name: 'tag 4' },
  { id: 5, name: 'tag 5' },
  { id: 6, name: 'tag 6' },
  { id: 7, name: 'tag 7' },
  { id: 8, name: 'tag 8' },
  { id: 9, name: 'tag 9' }
]

const wrap = (props = {}) => mount(<TagList tags={tags} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders the limit amount of tags', () => {
  const wrapper = wrap({ limit: 5 })
  expect(wrapper.children()).toHaveLength(5)
  wrapper.setProps({ limit: 4 })
  expect(wrapper.children()).toHaveLength(4)
})

it('renders the total amount of tags when limit is greater', () => {
  const wrapper = wrap({ limit: 50 })
  expect(wrapper.children()).toHaveLength(10)
})
