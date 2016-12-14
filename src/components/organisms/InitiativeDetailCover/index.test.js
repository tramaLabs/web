import React from 'react'
import { mount } from 'enzyme'
import InitiativeDetailCover from '.'

const initiative = { user: { id: 1 } }
const photo = { medium: 'test.jpg', large: 'test.jpg' }
const onSelect = jest.fn()
const onUpload = jest.fn()
const onCancel = jest.fn()

const wrap = (props = {}) => mount(
  <InitiativeDetailCover {...{ initiative, onSelect, onUpload, onCancel }} {...props} />
)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.findWhere((el) => el.text() === 'test').first()).toHaveLength(1)
})

it('does not render children when preview is passed in', () => {
  const wrapper = wrap({ children: 'test', preview: 'url.jpg' })
  expect(wrapper.findWhere((el) => el.text() === 'test').first()).toHaveLength(0)
})

it('does not render children when previewLoading is passed in', () => {
  const wrapper = wrap({ children: 'test', previewLoading: true })
  expect(wrapper.findWhere((el) => el.text() === 'test').first()).toHaveLength(0)
})

it('does not render children when photo is passed in', () => {
  const wrapper = wrap({ children: 'test', photo })
  expect(wrapper.findWhere((el) => el.text() === 'test').first()).toHaveLength(0)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('has initial state', () => {
  const wrapper = wrap()
  expect(wrapper.state()).toEqual({ file: null, filename: null })
})

it('renders input file when user is author', () => {
  const wrapper = wrap({ user: { id: 1 } })
  expect(wrapper.find('input[type="file"]')).toHaveLength(1)
})

it('renders preview options when preview is passed in and user is author', () => {
  const wrapper = wrap({ user: { id: 1 }, preview: 'url.jpg' })
  expect(wrapper.find('UploadStatusBar')).toHaveLength(1)
})

it('renders when initiative photo is passed in', () => {
  wrap({ initiative: { ...initiative, photo } })
})

describe('select', () => {
  const event = { target: { files: [] } }
  const file = { name: 'test file' }

  it('does not select when there is no file', () => {
    const wrapper = wrap()
    wrapper.instance().select(event)
    expect(wrapper.state()).toEqual({ file: null, filename: null })
    expect(onSelect).not.toBeCalled()
  })

  it('selects when file is passed in', () => {
    const e = { target: { files: [file] } }
    const wrapper = wrap()
    wrapper.instance().select(e)
    expect(wrapper.state()).toEqual({ file, filename: file.name })
    expect(onSelect).toBeCalledWith(file)
  })
})

describe('upload', () => {
  it('does not upload when there is no file state', () => {
    const wrapper = wrap()
    wrapper.instance().upload()
    expect(onUpload).not.toBeCalled()
  })

  it('uploads when there is file state', () => {
    const wrapper = wrap()
    wrapper.setState({ file: 1 })
    wrapper.instance().upload()
    expect(onUpload).toBeCalledWith(1)
  })
})

describe('cancel', () => {
  it('changes state and calls onCancel', () => {
    const wrapper = wrap()
    wrapper.setState({ file: 1, filename: 1 })
    expect(wrapper.state()).toEqual({ file: 1, filename: 1 })
    wrapper.instance().cancel()
    expect(wrapper.state()).toEqual({ file: null, filename: null })
    expect(onCancel).toBeCalled()
  })
})
