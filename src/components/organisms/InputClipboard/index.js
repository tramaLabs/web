import React, { PropTypes, Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import copy from 'copy-to-clipboard'

import { Input } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

class InputClipboard extends Component {
  render() {
    const { text, ...props } = this.props
    return (
      <Wrapper>
          <Input value={text} />
          <div {...props} onClick={this.copyToClipboard}>
            <div>{this.state.copied ? 'Copied' : text}</div>
          </div>
        </Wrapper>
    )
  }
  copyToClipboard() {
    const { text } = this.props
    if (copy(text)) {
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 1000)
    }
  }

  static propTypes = {
    url: PropTypes.string.isRequired,

  }
}
export default styled(InputClipboard)`
  display: inline-block;
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${(props) => props.hex};
  cursor: pointer;
  & > div {
    position: absolute;
    color: #fff;
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    line-height: 2rem;
    font-size: 1rem;
    bottom: 0;
    text-align: center;
  }
`
