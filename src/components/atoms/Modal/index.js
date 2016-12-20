import React, { PropTypes, Component } from 'react'
import styled, { css, injectGlobal } from 'styled-components'
import ReactModal from 'react-modal'

import { colors, fonts } from 'components/globals'

injectGlobal`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`

const wrapperStyles = css`
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

const Content = styled(ReactModal)`
  position: absolute;
  font-family: ${fonts.primary};
  font-size: 1rem;
  background-color: #fff;
  color: ${colors.grayscale[1]};
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, 100%);
  transition: transform 300ms ease-in-out;
  overflow: auto;
  overflow-scrolling: touch;
  outline: none;
  padding: 1rem;
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const StyledReactModal = styled(({ className, ...props }) =>
  <Content overlayClassName={className} closeTimeoutMS={250} {...props} />
)`${wrapperStyles}`

class Modal extends Component {
  static propTypes = {
    contentLabel: PropTypes.string
  }

  static defaultProps = {
    contentLabel: 'Modal'
  }

  state = {
    open: false
  }

  constructor (...args) {
    super(...args)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open () {
    this.setState({ open: true })
  }

  close () {
    this.setState({ open: false })
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return <StyledReactModal isOpen={this.state.open} onRequestClose={this.close} {...this.props} />
  }
}

export default Modal
