import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  padding: 3rem 1rem;
    white-space: pre-line;
`

const DescriptionPanel = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const InitiativeDetailDescription = ({ initiative, ...props }) => {
  return (
    <DescriptionPanel>
      <h2>Proposta</h2>
      <Wrapper {...props}>
        {initiative.description.split('\n').map((item, key) => {
          return <span key={key}>{item}<br /></span>
        })}
      </Wrapper>
    </DescriptionPanel>
  )
}

InitiativeDetailDescription.propTypes = {
  initiative: PropTypes.shape({
    description: PropTypes.string
  }).isRequired
}

export default InitiativeDetailDescription
