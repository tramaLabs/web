import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Tooltip, IconButton, InitiativeUserListModal } from 'components'

const Wrapper = styled.div`
  display: flex;
`

const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 36px;
  overflow: hidden;
  padding: 5em 5em 0;
  margin: -5em -5em 0;
  > * {
    margin-right: 0.25rem;
  }
`

const InitiativeUserList = ({ initiative, onOpenInitiativeUserListModal, ...props }) => {
  return (
    <Wrapper {...props}>
      <UserList>
        {initiative.users.map((user, key) =>
          <Tooltip key={key} data-title={user.name}>
            <div><img height={36} src={user.picture} alt={`Foto de ${user.name}`} /></div>
          </Tooltip>
        )}
      </UserList>
      <IconButton icon="more" kind="grayscale" size={36} onClick={onOpenInitiativeUserListModal} />
      <InitiativeUserListModal initiative={initiative} />
    </Wrapper>
  )
}

InitiativeUserList.propTypes = {
  initiative: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    })).isRequired
  }).isRequired,
  onOpenInitiativeUserListModal: PropTypes.func.isRequired
}

export default InitiativeUserList
