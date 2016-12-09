import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import FacebookLoginButton from 'containers/FacebookLoginButton'

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

const isAuthor = (user, initiative) =>
  user && initiative.user.id === user.id

const isCollaborator = (user, initiative) =>
  user && initiative.users.find((u) => u.id === user.id)

const InitiativeJoinButton = ({ user, initiative, onLeave, onJoin, ...props }) => {
  if (isAuthor(user, initiative)) return null
  else if (isCollaborator(user, initiative)) {
    return (
      <MutatingWrapper>
        <Button kind="success" {...props}>Participando</Button>
        <Button kind="danger" onClick={onLeave} {...props}>Cancelar participação</Button>
      </MutatingWrapper>
    )
  } else if (user) {
    return <Button onClick={onJoin} {...props}>Participar</Button>
  }
  return <FacebookLoginButton label="Participar" onSuccess={onJoin} {...props} />
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
  onJoin: PropTypes.func.isRequired
}

export default InitiativeJoinButton
