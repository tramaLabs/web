import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import { breakpoints, reverseColors } from 'components/globals'
import { IconButton, Button, UploadStatusBar, Spinner, CoverImage } from 'components'

import defaultPhoto from './cover.jpg'

const opacity = ({ previewLoading }) => previewLoading ? 1 : 0

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 420px;
  background-color: ${(props) => props.initiative.color};
  @media screen and (min-width: 640px) {
    & *[for=coverPhoto] {
      display: none;
    }
    &:hover *[for=coverPhoto] {
      display: block;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 2;
    background: radial-gradient(closest-corner at 50% 80%, transparent 80%, black 350%),
                linear-gradient(transparent 45%, black 105%);
    @media screen and (max-width: 640px) {
      background: radial-gradient(closest-corner at 50% 80%, transparent 80%, black 350%),
                  linear-gradient(transparent 45%, rgba(0, 0, 0, 0.5) 65%, black 105%);
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: ${reverseColors.alpha[4]};
    pointer-events: none;
    opacity: ${opacity};
    transition: opacity 500ms;
  }
`

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(${breakpoints.maxWidth} + 2rem);
  margin: 5rem auto 0;
  height: 100%;
  color: white;
  z-index: 3;
`

const ChangePhotoButton = styled(IconButton)`
  position: absolute;
  right: 1rem;
  top: 0;
`

const StyledSpinner = styled(Spinner)`
  align-self: center;
  margin: auto;
`

const Body = styled.div`
  margin-top: auto;
  padding: 0.5rem;
`

const OptionsWrapper = styled.div`
  display: flex;
  & > * {
    margin: 0.5rem;
  }
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
    & > * {
      flex: 1;
    }
  }
`

const StyledUploadStatusBar = styled(UploadStatusBar)`
  flex: 1;
  max-width: calc(100% - 1rem);
  @media screen and (max-width: 640px) {
    flex: 1 1 100% !important;
  }
`

class InitiativeDetailCover extends Component {
  static propTypes = {
    initiative: PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.any.isRequired
      }).isRequired,
      photo: PropTypes.shape({
        medium: PropTypes.string,
        large: PropTypes.string
      }).isRequired
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.any.isRequired
    }),
    children: PropTypes.any,
    onSelect: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    uploadProgress: PropTypes.number,
    uploadLoading: PropTypes.bool,
    preview: PropTypes.string,
    previewLoading: PropTypes.bool
  }

  state = {
    file: null,
    filename: null
  }

  constructor (...args) {
    super(...args)
    this.select = this.select.bind(this)
    this.cancel = this.cancel.bind(this)
    this.upload = this.upload.bind(this)
  }

  select (e) {
    const file = e.target.files[0]
    if (file) {
      const filename = e.target.files[0].name
      this.setState({ file, filename })
      this.props.onSelect(file)
    }
  }

  upload () {
    if (this.state.file) {
      this.props.onUpload(this.state.file)
    }
  }

  cancel () {
    this.setState({ file: null, filename: null })
    this.props.onCancel()
  }

  renderInput () {
    return (
      <div>
        <input
          type="file"
          id="coverPhoto"
          style={{ display: 'none' }}
          accept="image/*"
          ref="input"
          onChange={this.select} />
        <ChangePhotoButton
          component="label"
          htmlFor="coverPhoto"
          icon="camera"
          kind="alpha"
          size={32}
          light
          responsive
          collapsed>
          Mudar foto de capa
        </ChangePhotoButton>
      </div>
    )
  }

  renderPreviewOptions () {
    const { previewLoading, uploadLoading, uploadProgress } = this.props
    const { filename } = this.state
    return (
      <OptionsWrapper>
        <StyledUploadStatusBar
          filename={filename}
          progress={uploadProgress} />
        <Button
          loading={uploadLoading || previewLoading}
          disabled={uploadLoading || previewLoading || !this.state.file}
          onClick={this.upload}>
          Salvar como foto de capa
        </Button>
        <Button
          kind="grayscale"
          disabled={uploadLoading}
          onClick={this.cancel}
          light
          transparent>
          Cancelar
        </Button>
      </OptionsWrapper>
    )
  }

  render () {
    const { initiative, user, preview, previewLoading, children } = this.props
    const isAuthor = user && initiative.user.id === user.id
    const isFetching = preview || previewLoading
    return (
      <Wrapper {...this.props}>
        <CoverImage src={preview || initiative.photo.large || defaultPhoto} />
        <InnerWrapper>
          {isAuthor && !isFetching && this.renderInput()}
          {isFetching && !preview && <StyledSpinner light />}
          <Body>
            {isAuthor && preview && this.renderPreviewOptions()}
            {!isFetching && children}
          </Body>
        </InnerWrapper>
      </Wrapper>
    )
  }
}

export default InitiativeDetailCover
