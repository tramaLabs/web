import React, { PropTypes } from 'react'
import styled, { css, injectGlobal } from 'styled-components'
import ReactModal from 'react-modal'

import { colors, fonts } from 'components/globals'
import { Heading, IconButton } from 'components'

injectGlobal`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*="after-open"] {
    opacity: 1;
  }
  &[class*="before-close"] {
    opacity: 0;
  }
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  font-family: ${fonts.primary};
  font-size: 1rem;
  background-color: #fff;
  color: ${colors.grayscale[0]};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  overflow: auto;
  transform: translate(-50%, 100%);
  transition: transform 300ms ease-in-out;
  outline: none;
  padding: 1rem;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  @media screen and (max-width: 640px) {
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  > *:first-child {
    flex: 1;
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 1rem 0 0;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const StyledReactModal = styled(({ className, ...props }) =>
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
)`${overlayStyles}`

const Modal = ({ children, title, closeable, onClose, ...props }) => {
  return (
    <StyledReactModal contentLabel={title || 'Modal'} onRequestClose={onClose} {...props}>
      {(title || closeable) && <Header>
        <StyledHeading level={2}>{title}</StyledHeading>
        {closeable && <IconButton icon="close" onClick={onClose} kind="alpha" light />}
      </Header>}
      {children}
    </StyledReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default Modal
