import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import { FacebookLoginButton } from 'containers'

const MutatingWrapper = styled.div`
  & > *:nth-child(1) {
    display: block;
  }
  & > *:nth-child(2) {
    display: none;
  }
  &:hover > *:nth-child(1) {
    display: none;
  }
  &:hover > *:nth-child(2) {
    display: block;
  }
`

const MutatingButton = styled(Button)`
  width: 100%;
`

const isDonor = (user, demand) =>
  user && demand.donors.find((u) => u.id === user.id)

const OfferButton = ({ user, demand, onLeave, onJoin, ...props, reverse }) => {
  if (isDonor(user, demand)) {
    return (
      <MutatingWrapper>
        <MutatingButton palette="success" {...props}>Você ofereceu</MutatingButton>
        <MutatingButton palette="danger" onClick={onLeave} {...props}>
          Cancelar oferta
        </MutatingButton>
      </MutatingWrapper>
    )
  } else if (user) {
    return <Button onClick={onJoin} {...props}>Oferecer</Button>
  }
  return (
    <FacebookLoginButton onSuccess={onJoin} {...props}>Oferecer</FacebookLoginButton>
  )
}

const user = PropTypes.shape({
  id: PropTypes.any
})

OfferButton.propTypes = {
  user,
  demand: PropTypes.shape({
    donors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any,
      quantity: PropTypes.number,
    })),
  }).isRequired,
  onLeave: PropTypes.func.isRequired,
  onJoin: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  reverse: PropTypes.bool
}

export default OfferButton
