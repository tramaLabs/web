import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${fonts.primary};
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => colors[props.kind][0]};
  background-color: ${(props) => [ ...colors[props.kind] ].reverse()[0]};
  border: 1px solid ${(props) => [ ...colors[props.kind] ].reverse()[1]};
  & > * {
    margin: 0.5rem;
  }
`

const Message = styled.span`
  flex: 1;
`

const Feedback = ({ children, left, right, ...props }) => {
  return (
    <Wrapper {...props}>
      {left}
      <Message>{children}</Message>
      {right}
    </Wrapper>
  )
}

Feedback.propTypes = {
  children: PropTypes.any,
  left: PropTypes.any,
  right: PropTypes.any,
  kind: PropTypes.oneOf(Object.keys(colors))
}

Feedback.defaultProps = {
  kind: 'primary'
}

export default Feedback
