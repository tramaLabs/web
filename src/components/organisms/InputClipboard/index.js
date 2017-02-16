import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Input, IconButtonClipboard } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

class InputClipboard extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text, ...props } = this.props
    return (
      <Wrapper {...props}>
        <Input value={text} />
        <IconButtonClipboard text={text} />
      </Wrapper>
    )
  }


}
export default InputClipboard
