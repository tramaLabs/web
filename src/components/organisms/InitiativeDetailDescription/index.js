import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  padding: 3rem 1rem;
`

const DescriptionPanel = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const InitiativeDetailDescription = ({ initiative, ...props }) => {
  return (
    <DescriptionPanel>
      Descrição
      <Wrapper {...props}> {initiative.description}</Wrapper>
    </DescriptionPanel>
  )
}

InitiativeDetailDescription.propTypes = {
  initiative: PropTypes.shape({
    description: PropTypes.string
  }).isRequired
}

export default InitiativeDetailDescription
