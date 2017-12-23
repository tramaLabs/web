import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${font('primary')};
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${palette('grayscale', 0)};
  background-color: ${palette(0, true)};
  border: 1px solid ${palette(1, true)};
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
  palette: PropTypes.string
}

Alert.defaultProps = {
  palette: 'alert',
  role: 'alert'
}

export default Alert
