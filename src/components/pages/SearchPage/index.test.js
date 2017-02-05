import React from 'react'
import { mount } from 'enzyme'
import SearchPage from '.'

const wrap = () => {
  const hero = document.createElement('div')
  const header = document.createElement('div')
  hero.id = 'hero'
  hero.clientHeight = 500
  header.id = 'header'
  header.clientHeight = 100

  document.body.appendChild(hero)
  document.body.appendChild(header)

  return mount(<SearchPage />)
}

const scrollTop = (position) => {
  window.scrollY = position
  window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }))
}

it('mounts and unmounts', () => {
  const wrapper = wrap()
  wrapper.unmount()
})

it('has initialState', () => {
  const wrapper = wrap()
  expect(wrapper.state('scrolledBeyondHero')).toBe(false)
})

it('scrolls beyond hero', () => {
  const wrapper = wrap()
  expect(wrapper.state('scrolledBeyondHero')).toBe(false)
  scrollTop(400)
  expect(wrapper.state('scrolledBeyondHero')).toBe(true)
  scrollTop(399)
  expect(wrapper.state('scrolledBeyondHero')).toBe(false)
  scrollTop(399)
  expect(wrapper.state('scrolledBeyondHero')).toBe(false)
})
