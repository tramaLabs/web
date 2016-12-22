import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Caption = styled.span`
  display: block;
  color: ${colors.grayscale[2]};
  font-family: ${fonts.primary};
  font-size: 1rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default Caption
