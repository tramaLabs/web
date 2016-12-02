import styled from 'styled-components'
import { MenuItem } from 'react-aria-menubutton'

const StyledMenuItem = styled(MenuItem)`
  padding: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export default StyledMenuItem
