import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { colors, fonts } from 'components/globals'

const styles = ({ level }) => css`
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: ${1 + 1.625 * (1 / level)}rem;
  margin: 0;
  margin-top: ${1 + 0.5 * (1 / level)}rem;
  margin-bottom: ${0.5 + 0.5 * (1 / level)}rem;
  color: ${level === 1 ? colors.primary[1] : colors.grayscale[0]};
`

const Heading = styled(({ level, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any
}

Heading.defaultProps = {
  level: 1
}

export default Heading
