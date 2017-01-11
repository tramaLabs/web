import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette, ifProp } from 'styled-theme'

const Block = styled.div`
  font-family: ${font('primary')};
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  palette: PropTypes.string,
  opaque: PropTypes.bool,
  reverse: PropTypes.bool
}

Block.defaultProps = {
  palette: 'grayscale'
}

export default Block
