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
  color: ${colors.grayscale[1]};
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
  max-width: 740px;
  max-height: calc(100% - 1rem);
  @media screen and (max-width: 420px) {
    width: calc(100% - 1rem);
    height: 100%;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const StyledReactModal = styled(({ className, ...props }) =>
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
)`${overlayStyles}`

const Header = styled.header`
  display: flex;
  margin-bottom: 1rem;
  > *:first-child {
    flex: 1;
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 1rem 0 0;
`

const Modal = ({ children, title, onClose, ...props }) => {
  return (
    <StyledReactModal contentLabel={title || 'Modal'} onRequestClose={onClose} {...props}>
      <Header>
        <StyledHeading level={2}>{title}</StyledHeading>
        <IconButton icon="close" onClick={onClose} kind="alpha" light />
      </Header>
      {children}
    </StyledReactModal>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.node
}

export default Modal
