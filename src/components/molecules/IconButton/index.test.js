import React from 'react'
import { mount, shallow } from 'enzyme'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton icon="close" {...props} />)

it('mounts with different combination of props', () => {
  mount(<IconButton icon="close">test</IconButton>)
  mount(<IconButton icon="close" right>test</IconButton>)
  mount(<IconButton icon="close" responsive>test</IconButton>)
  mount(<IconButton icon="close" collapsed>test</IconButton>)
  mount(<IconButton icon="close" right responsive>test</IconButton>)
  mount(<IconButton icon="close" />)
  mount(<IconButton icon="close" right />)
  mount(<IconButton icon="close" responsive />)
  mount(<IconButton icon="close" right responsive />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('passes height to icon', () => {
  const wrapper = wrap({ height: 20 })
  expect(wrapper.find({ height: 20 / 2.5 })).toHaveLength(1)
})

it('renders icon on left by default', () => {
  const wrapper = wrap({ children: 'test' })
  const icon = wrapper.find({ icon: 'close' })
  const parent = icon.parent()
  expect(parent.children().first().prop('icon')).toBe('close')
})

it('renders icon on right when prop is passed in', () => {
  const wrapper = wrap({ children: 'test', right: true })
  const icon = wrapper.find({ icon: 'close' })
  const parent = icon.parent()
  expect(parent.children().last().prop('icon')).toBe('close')
})
