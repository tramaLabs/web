import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { DemandCard, Heading, Button, NewDemandCard } from 'components'

const Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

const isAuthor = (user, initiative) =>
  user && initiative.user.id === user.id

const onAddDemand = () =>
  console.log('AEEEEEEEEW')

const InitiativeDemandBoard = ({ initiative, user, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <Heading level={4}>{initiative.title} precisa de</Heading>
      { initiative.demands.map(demand =>
        <DemandCard key={demand.title} initiative={initiative} demand={demand} reverse={reverse} />
      )}
    </Wrapper>
  )
}

InitiativeDemandBoard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.any
  }),
  initiative: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    demands: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }))
  }).isRequired,
  reverse: PropTypes.bool
}


export default InitiativeDemandBoard
