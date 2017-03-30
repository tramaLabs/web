import React from 'react'
import { mount } from 'enzyme'
import Header from '.'

const wrap = (props = {}) => {
  const hero = document.createElement('div')
  const header = document.createElement('div')
  hero.id = 'hero'
  Object.defineProperty(hero, 'clientHeight', { value: 500 })
  header.id = 'header'
  Object.defineProperty(header, 'clientHeight', { value: 100 })

  document.body.appendChild(hero)
  document.body.appendChild(header)

  return mount(<Header {...props} />)
}

const scrollTop = (position) => {
  window.scrollY = position
  window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }))
}

it('renders when hideSearch is passed in', () => {
  wrap({ hideSearch: true })
})

it('mounts and unmounts', () => {
  const wrapper = wrap()
  wrapper.unmount()
})

it('has initialState', () => {
  const wrapper = wrap()
  expect(wrapper.state('scrolled')).toBe(false)
})

it('does not set scrolled state when scrollsTranslucid is passed in', () => {
  const wrapper = wrap()
  expect(wrapper.state('scrolled')).toBe(false)
  scrollTop(1)
  expect(wrapper.state('scrolled')).toBe(false)
})

it('sets scrolled state when scrollsTranslucid is passed in', () => {
  const wrapper = wrap({ scrollsTranslucid: true })
  expect(wrapper.state('scrolled')).toBe(false)
  scrollTop(1)
  expect(wrapper.state('scrolled')).toBe(true)
  scrollTop(0)
  expect(wrapper.state('scrolled')).toBe(false)
  scrollTop(0)
  expect(wrapper.state('scrolled')).toBe(false)
})

it('keeps scrolled state true when userAgent is Safari', () => {
  Object.defineProperty(window.navigator, 'userAgent', { value: 'Safari' })
  const wrapper = wrap({ scrollsTranslucid: true })
  expect(wrapper.state('scrolled')).toBe(true)
  scrollTop(1)
  expect(wrapper.state('scrolled')).toBe(true)
})
