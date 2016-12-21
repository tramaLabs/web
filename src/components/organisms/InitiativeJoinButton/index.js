import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button, Tooltip } from 'components'
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

const isAuthor = (user, initiative) =>
  user && initiative.user.id === user.id

const isCollaborator = (user, initiative) =>
  user && initiative.users.find((u) => u.id === user.id)

const InitiativeJoinButton = ({ user, initiative, onLeave, onJoin, ...props }) => {
  if (isAuthor(user, initiative)) {
    return (
      <Tooltip data-title="Você é o criador da iniciativa">
        <Button
          kind="success"
          {...props}
          loading={false}
          style={{ cursor: 'default' }}>
          Participando
        </Button>
      </Tooltip>
    )
  } else if (isCollaborator(user, initiative)) {
    return (
      <MutatingWrapper>
        <MutatingButton kind="success" {...props}>Participando</MutatingButton>
        <MutatingButton kind="danger" onClick={onLeave} {...props}>
          Cancelar participação
        </MutatingButton>
      </MutatingWrapper>
    )
  } else if (user) {
    return <Button onClick={onJoin} {...props}>Participar</Button>
  }
  return (
    <FacebookLoginButton label="Participar" onSuccess={onJoin} {...props} />
  )
}

const user = PropTypes.shape({
  id: PropTypes.any
})

InitiativeJoinButton.propTypes = {
  user,
  initiative: PropTypes.shape({
    user: user.isRequired,
    users: PropTypes.arrayOf(user).isRequired
  }).isRequired,
  onLeave: PropTypes.func.isRequired,
  onJoin: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default InitiativeJoinButton
