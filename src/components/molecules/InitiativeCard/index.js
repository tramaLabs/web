import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const InitiativeCard = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title}</Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

InitiativeCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default InitiativeCard
