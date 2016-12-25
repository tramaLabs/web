import React from 'react'
import { mount } from 'enzyme'
import InitiativeDetailCover from '.'

const initiative = { user: { id: 1 }, photo: {} }
const photo = { medium: 'test.jpg', large: 'test.jpg' }
const onPhotoSelect = jest.fn()
const onPhotoUpload = jest.fn()
const onPreviewCancel = jest.fn()

const wrap = (props = {}) => mount(
  <InitiativeDetailCover {...{ initiative, onPhotoSelect, onPhotoUpload, onPreviewCancel }} {...props} />
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

describe('handlePhotoSelect', () => {
  const event = { target: { files: [] } }
  const file = { name: 'test file' }

  it('does not select when there is no file', () => {
    const wrapper = wrap()
    wrapper.instance().handlePhotoSelect(event)
    expect(wrapper.state()).toEqual({ file: null, filename: null })
    expect(onPhotoSelect).not.toBeCalled()
  })

  it('selects when file is passed in', () => {
    const e = { target: { files: [file] } }
    const wrapper = wrap()
    wrapper.instance().handlePhotoSelect(e)
    expect(wrapper.state()).toEqual({ file, filename: file.name })
    expect(onPhotoSelect).toBeCalledWith(file)
  })
})

describe('handlePhotoUpload', () => {
  it('does not upload when there is no file state', () => {
    const wrapper = wrap()
    wrapper.instance().handlePhotoUpload()
    expect(onPhotoUpload).not.toBeCalled()
  })

  it('uploads when there is file state', () => {
    const wrapper = wrap()
    wrapper.setState({ file: 1 })
    wrapper.instance().handlePhotoUpload()
    expect(onPhotoUpload).toBeCalledWith(1)
  })
})

describe('handlePreviewCancel', () => {
  it('changes state and calls onPreviewCancel', () => {
    const wrapper = wrap()
    wrapper.setState({ file: 1, filename: 1 })
    expect(wrapper.state()).toEqual({ file: 1, filename: 1 })
    wrapper.instance().handlePreviewCancel()
    expect(wrapper.state()).toEqual({ file: null, filename: null })
    expect(onPreviewCancel).toBeCalled()
  })
})
