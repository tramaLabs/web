import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { InitiativeCard } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  & > * {
    margin: 0.5rem;
    width: calc(33% - 1rem);
    height: 250px;
    @media screen and (max-width: 1024px) {
      width: calc(50% - 1rem);
    }
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const InitiativeCardList = ({ initiatives, ...props }) => {
  return (
    <Wrapper {...props}>
      {initiatives.map((initiative, i) =>
        <InitiativeCard key={i} initiative={initiative} />
      )}
    </Wrapper>
  )
}

InitiativeCardList.propTypes = {
  initiatives: PropTypes.array.isRequired
}

export default InitiativeCardList
