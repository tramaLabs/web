import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor } from 'arc-theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${font('primary')};
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${color('grayscale', 0)};
  background-color: ${reverseColor(0)};
  border: 1px solid ${reverseColor(1)};
  & > * {
    margin: 0.5rem;
  }
`

const Message = styled.span`
  flex: 1;
`

const Alert = ({ children, left, right, ...props }) => {
  return (
    <Wrapper {...props}>
      {left}
      <Message>{children}</Message>
      {right}
    </Wrapper>
  )
}

Alert.propTypes = {
  children: PropTypes.any,
  left: PropTypes.any,
  right: PropTypes.any,
  color: PropTypes.string
}

Alert.defaultProps = {
  color: 'alert',
  role: 'alert'
}

export default Alert
