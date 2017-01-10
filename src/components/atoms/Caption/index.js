import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Caption = styled.span`
  font-family: ${font('primary')};
  color: ${color('grayscale', 2)};
  display: block;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

Caption.propTypes = {
  reverse: PropTypes.bool
}

export default Caption
