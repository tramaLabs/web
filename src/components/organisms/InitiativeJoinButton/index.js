import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button, Tooltip } from 'components'
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

const join = ({ initiative, onJoin }) => () => onJoin(initiative.id)
const leave = ({ initiative, onLeave }) => () => onLeave(initiative.id)

const InitiativeJoinButton = ({ ...all, user, initiative, onLeave, onJoin, loading, ...props }) => {
  if (isAuthor(user, initiative)) {
    return (
      <Tooltip data-title="Você é o criador da iniciativa">
        <Button kind="success" {...props} style={{ cursor: 'default' }}>Participando</Button>
      </Tooltip>
    )
  } else if (isCollaborator(user, initiative)) {
    return (
      <MutatingWrapper>
        <Button kind="success" {...props}>Participando</Button>
        <Button kind="danger" onClick={leave(all)} {...props}>Cancelar participação</Button>
      </MutatingWrapper>
    )
  } else if (user) {
    return <Button onClick={join(all)} disabled={loading} {...props}>Participar</Button>
  }
  return (
    <FacebookLoginButton
      label="Participar"
      onSuccess={join(all)}
      disabled={loading}
      {...props} />
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
