import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { DemandCard, Heading } from 'components'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
 
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 0 0.5rem;
`

const InitiativeDemandBoard = ({ initiative, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <StyledHeading level={4}>{initiative.title} precisa de</StyledHeading>
      { initiative.demands.map(demand =>
        <DemandCard key={demand.title} demand={demand} reverse={reverse} />
      )}
    </Wrapper>
  )
}

InitiativeDemandBoard.propTypes = {
  initiative: PropTypes.shape({
    name: PropTypes.string,
    demands: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }))
  }).isRequired,
  reverse: PropTypes.bool
}


export default InitiativeDemandBoard
