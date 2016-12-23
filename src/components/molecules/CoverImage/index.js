import styled from 'styled-components'

import { LazyImage } from 'components'

const CoverImage = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: top;
`

export default CoverImage
