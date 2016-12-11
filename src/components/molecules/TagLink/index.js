import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { Link } from 'components'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: ${fonts.primary};
  font-size: 0.875rem;
`

const Square = styled.span`
  display: block;
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
  background-color: ${colors.primary[1]};
`

const TagLink = ({ children, ...props }) => {
  return (
    <StyledLink to={`/iniciativas?q=${children}`} kind="grayscale" light {...props}>
      <Square />
      <span>{children}</span>
    </StyledLink>
  )
}

TagLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default TagLink
