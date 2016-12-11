import React from 'react'
import { mount } from 'enzyme'
import TagList from '.'

const tags = [
  { name: 'tag 0' },
  { name: 'tag 1' },
  { name: 'tag 2' },
  { name: 'tag 3' },
  { name: 'tag 4' },
  { name: 'tag 5' },
  { name: 'tag 6' },
  { name: 'tag 7' },
  { name: 'tag 8' },
  { name: 'tag 9' }
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
