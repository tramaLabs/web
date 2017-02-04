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

const InitiativeUserList = ({ initiative, onOpenInitiativeUserListModal, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <UserList>
        {initiative.users.map((user, key) =>
          <Tooltip
            key={user.id}
            data-title={user.name}
            reverse={reverse}
            align={key === 0 ? 'start' : 'center'}
          >
            <div>
              <a href={`http://www.facebook.com/${user.services.facebook}`}>
              <img height={36} src={user.picture} alt={`Foto de ${user.name}`} />
              </a>
            </div>  
          </Tooltip>
        )}
      </UserList>
      <IconButton
        icon="more"
        palette="grayscale"
        height={36}
        transparent
        reverse={reverse}
        onClick={onOpenInitiativeUserListModal}
      />
      <InitiativeUserListModal initiative={initiative} />
    </Wrapper>
  )
}

InitiativeUserList.propTypes = {
  initiative: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      picture: PropTypes.string,
      services:PropTypes.shape({ 
        facebook: PropTypes.string
      }).isRequired
    })).isRequired
  }).isRequired,
  onOpenInitiativeUserListModal: PropTypes.func.isRequired,
  reverse: PropTypes.bool
}

export default InitiativeUserList
