import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

import { Link } from 'components'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: ${font('primary')};
  font-size: 0.875rem;
`

const Square = styled.span`
  display: block;
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
  background-color: ${color('primary', 1)};
`

const Text = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TagLink = ({ children, ...props }) => {
  return (
    <StyledLink to={`/iniciativas?q=${children}`} color="grayscale" {...props}>
      <Square />
      <Text>{children}</Text>
    </StyledLink>
  )
}

TagLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default TagLink
