import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { InitiativeCard } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const InitiativeList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <div>Loading</div>}
      {list.map((post, i) => <InitiativeCard key={i} loading={loading} {...post} />)}
    </Wrapper>
  )
}

InitiativeList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default InitiativeList
