import React, { Component } from 'react'
import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'

import { IconButton } from 'components'


class IconButtonClipboard extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

  }
  constructor(props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.state = {
      copied: false
    }
  }
  // istanbul ignore next
  copyToClipboard() {
    const { text } = this.props
    if (copy(text)) {
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 1000)
    }
  }
  render() {
    const { text, ...props } = this.props
    return (
      <IconButton palette="grayscale" icon="copy-link" onClick={this.copyToClipboard} {...props} />
    )
  }


}
export default IconButtonClipboard
