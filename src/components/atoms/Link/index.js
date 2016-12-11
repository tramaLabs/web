import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

import { colors, reverseColors, fonts } from 'components/globals'

const styles = ({ light, kind }) => {
  const color = light ? reverseColors[kind] : colors[kind]
  return css`
    font-family: ${fonts.primary};
    text-decoration: none;
    font-weight: 500;
    color: ${color[1]};

    &:hover {
      text-decoration: underline;
      color: ${color[0]};
    }
  `
}

const StyledLink = styled(({ light, kind, ...props }) => <RouterLink {...props} />)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  if (to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  kind: 'primary'
}

export default Link
