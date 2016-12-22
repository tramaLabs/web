import React from 'react'
import { mount, shallow } from 'enzyme'
import LazyImage from '.'

jest.useFakeTimers()
const getMockImplementation = ({ top, right, bottom, left } = {}) => () => ({
  top: top || 0,
  right: right || 0,
  bottom: bottom || 0,
  left: left || 0
})

const wrap = (props = {}, getBoundingClientRect = getMockImplementation()) => {
  const wrapper = mount(<LazyImage src="image.jpg" {...props} />)
  const image = wrapper.ref('image').node
  image.getBoundingClientRect = getBoundingClientRect
  jest.runAllTimers()
  return wrapper
}

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders noscript when not mounted', () => {
  const wrapper = shallow(<LazyImage src="image.jpg" />)
  expect(wrapper.find('img')).toHaveLength(0)
  expect(wrapper.find('noscript')).toHaveLength(1)
})

it('renders img when mounted', () => {
  const wrapper = wrap()
  expect(wrapper.find('img')).toHaveLength(1)
  expect(wrapper.find('script')).toHaveLength(0)
})

it('sets javascriptEnabled state to false when not mounted', () => {
  const wrapper = shallow(<LazyImage src="image.jpg" />)
  expect(wrapper.state('javascriptEnabled')).toBe(false)
})

it('sets javascriptEnabled state to true when mounted', () => {
  const wrapper = wrap()
  expect(wrapper.state('javascriptEnabled')).toBe(true)
})

it('renders img with undefined src when not in viewport', () => {
  const wrapper = wrap({}, getMockImplementation({ top: 2000 }))
  expect(wrapper.find({ src: undefined })).toHaveLength(1)
})

it('renders img with src when in viewport', () => {
  const wrapper = wrap()
  expect(wrapper.find({ src: 'image.jpg' })).toHaveLength(1)
})

it('removes event listener when unmount', () => {
  const wrapper = wrap()
  window.removeEventListener = jest.fn()
  expect(window.removeEventListener).not.toBeCalled()
  wrapper.unmount()
  expect(window.removeEventListener).toBeCalled()
  window.removeEventListener.mockReset()
})

describe('setImageState', () => {
  it('sets inViewport state to false when mounted out of the viewport', () => {
    const wrapper = wrap({}, getMockImplementation({ top: 2000 }))
    wrapper.instance().setImageState()
    expect(wrapper.state('inViewport')).toBe(false)
  })

  it('sets inViewport state to true when mounted in viewport', () => {
    const wrapper = wrap()
    wrapper.instance().setImageState()
    expect(wrapper.state('inViewport')).toBe(true)
  })

  it('sets loaded state to true when image is complete', () => {
    const wrapper = wrap()
    const image = wrapper.ref('image').node
    expect(wrapper.state('loaded')).toBe(false)
    Object.defineProperty(image, 'complete', { value: true })
    wrapper.instance().setImageState()
    expect(wrapper.state('loaded')).toBe(true)
  })

  it('sets loaded state to true when image is loaded', () => {
    const wrapper = wrap()
    const image = wrapper.ref('image').node
    wrapper.instance().setImageState()
    expect(wrapper.state('loaded')).toBe(false)
    image.dispatchEvent(new window.UIEvent('load'))
    expect(wrapper.state('loaded')).toBe(true)
  })
})

describe('isInViewport', () => {
  it('returns true when image is in viewport', () => {
    const wrapper = wrap({}, getMockImplementation({ right: 30, bottom: 30 }))
    expect(wrapper.instance().isInViewport()).toBe(true)
  })

  it('returns false when image is out of the window vertically on top', () => {
    const wrapper = wrap({}, getMockImplementation({ top: -50, bottom: -20 }))
    expect(wrapper.instance().isInViewport()).toBe(false)
  })

  it('returns false when image is out of the window vertically on bottom', () => {
    const wrapper = wrap({}, getMockImplementation({ top: 2000, bottom: 2100 }))
    expect(wrapper.instance().isInViewport()).toBe(false)
  })

  it('returns false when image is out of the window vertically on left', () => {
    const wrapper = wrap({}, getMockImplementation({ right: -20, left: -50 }))
    expect(wrapper.instance().isInViewport()).toBe(false)
  })

  it('returns false when image is out of the window vertically on right', () => {
    const wrapper = wrap({}, getMockImplementation({ right: 2100, left: 2000 }))
    expect(wrapper.instance().isInViewport()).toBe(false)
  })

  it('reads documentElement sizes if window sizes are not available', () => {
    document.documentElement.clientHeight = window.innerHeight
    document.documentElement.clientWidth = window.innerWidth
    delete window.innerHeight
    delete window.innerWidth
    const wrapper = wrap({}, getMockImplementation({ top: 10, left: 10 }))
    expect(wrapper.instance().isInViewport()).toBe(true)
    window.innerHeight = document.documentElement.clientHeight
    window.innerWidth = document.documentElement.clientWidth
  })
})
