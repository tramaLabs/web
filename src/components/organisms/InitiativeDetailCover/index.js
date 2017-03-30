import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { get, ifProp } from 'styled-tools'

import { IconButton, Button, UploadStatusBar, Spinner, CoverImage } from 'components'

import defaultPhoto from './default_cover.png'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 420px;
  background-color: ${get('initiative.color')};
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
    background: radial-gradient(
      closest-corner at 50% 80%,
      transparent 80%,
      ${palette('grayscale', 0)} 350%
    ), linear-gradient(
      transparent 45%,
      ${palette('grayscale', 0)} 100%
    );
  }
  &:after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: ${palette('alpha', 3, true)};
    pointer-events: none;
    opacity: ${ifProp('previewLoading', 1, 0)};
    transition: opacity 500ms;
    z-index: 2;
  }
`

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(${size('maxWidth')} + 2rem);
  margin: 5rem auto 0;
  height: 100%;
  color: ${palette('grayscale', 0, true)};
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
      }).isRequired,
      palette: PropTypes.string
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.any.isRequired
    }),
    children: PropTypes.any,
    onPhotoSelect: PropTypes.func.isRequired,
    onPhotoUpload: PropTypes.func.isRequired,
    onPreviewCancel: PropTypes.func.isRequired,
    uploadProgress: PropTypes.number,
    uploadLoading: PropTypes.bool,
    preview: PropTypes.string,
    previewLoading: PropTypes.bool,
    reverse: PropTypes.bool
  }

  state = {
    file: null,
    filename: null
  }

  handlePhotoSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      const filename = e.target.files[0].name
      this.setState({ file, filename })
      this.props.onPhotoSelect(file)
    }
  }

  handlePhotoUpload = () => {
    if (this.state.file) {
      this.props.onPhotoUpload(this.state.file)
    }
  }

  handlePreviewCancel = () => {
    this.setState({ file: null, filename: null })
    this.props.onPreviewCancel()
  }

  renderInput() {
    return (
      <div>
        <input
          type="file"
          id="coverPhoto"
          style={{ display: 'none' }}
          accept="image/*"
          ref={input => { this.input = input }}
          onChange={this.handlePhotoSelect}
        />
        <ChangePhotoButton
          component="label"
          htmlFor="coverPhoto"
          icon="camera"
          palette="alpha"
          height={32}
          reverse={!this.props.reverse}
          responsive
          collapsed
        >
          Mudar foto de capa
        </ChangePhotoButton>
      </div>
    )
  }

  renderPreviewOptions() {
    const { previewLoading, uploadLoading, uploadProgress, reverse } = this.props
    const { filename } = this.state
    return (
      <OptionsWrapper>
        <StyledUploadStatusBar
          filename={filename}
          progress={uploadProgress}
          reverse={reverse}
        />
        <Button
          loading={uploadLoading || previewLoading}
          disabled={uploadLoading || previewLoading || !this.state.file}
          onClick={this.handlePhotoUpload}
        >
          Salvar como foto de capa
        </Button>
        <Button
          palette="grayscale"
          disabled={uploadLoading}
          onClick={this.handlePreviewCancel}
          reverse={!reverse}
          transparent
        >
          Cancelar
        </Button>
      </OptionsWrapper>
    )
  }

  render() {
    const { initiative, user, preview, previewLoading, children } = this.props
    const isAuthor = user && initiative.user.id === user.id
    const isFetching = preview || previewLoading
    return (
      <Wrapper {...this.props}>
        <CoverImage src={preview || initiative.photo.large || defaultPhoto} />
        <InnerWrapper reverse={this.props.reverse}>
          {isAuthor && !isFetching && this.renderInput()}
          {isFetching && !preview && <StyledSpinner reverse />}
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
