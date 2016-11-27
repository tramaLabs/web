import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Div = styled.div`
  display: block;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[1]};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
`

const TagLink = ({ children, ...props }) => {
  return (
    <Div {...props}>
      <Div>{children}</Div>
    </Div>
  )
}

TagLink.propTypes = {
  children: PropTypes.any
}

export default TagLink