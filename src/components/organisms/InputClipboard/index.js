import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

import { Input, IconButton } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

class InputClipboard extends Component {
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
      <Wrapper {...props}>
        <Input value={text} />
        <IconButton palette="grayscale" icon="copy-link" onClick={this.copyToClipboard} />
      </Wrapper>
    )
  }


}
export default InputClipboard
