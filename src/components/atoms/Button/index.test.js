import React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

it('renders with different combination of props', () => {
  wrap({ disabled: true })
  wrap({ transparent: true })
  wrap({ disabled: true, transparent: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders disabled when loading is passed in', () => {
  const wrapper = wrap({ loading: true })
  expect(wrapper.find({ disabled: true })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button')).toHaveLength(1)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('a')).toHaveLength(1)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' }).dive()
  expect(wrapper.find('Link')).toHaveLength(1)
})

it('renders aria menu button when type is menu', () => {
  const wrapper = wrap({ type: 'menu', children: 'test' }).dive()
  expect(wrapper.find('AriaMenuButtonButton')).toHaveLength(1)
})

it('renders component when component string is passed in', () => {
  const wrapper = wrap({ component: 'label' }).dive()
  expect(wrapper.find('label')).toHaveLength(1)
})

it('renders component when component element is passed in', () => {
  const Test = () => <span />
  const wrapper = wrap({ component: Test }).dive()
  expect(wrapper.find(Test)).toHaveLength(1)
})
