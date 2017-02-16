import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Input, IconButtonClipboard } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const InputClipboard = ({ text, ...props }) => {
  return (
    <Wrapper {...props}>
      <Input value={text} />
      <IconButtonClipboard text={text} />
    </Wrapper>
  )
}

InputClipboard.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InputClipboard
