import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Tooltip, IconButton, UserListModal } from 'components'

const Wrapper = styled.div`
  display: flex;
`

const List = styled.div`
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

const UserList = ({ users, onOpenUserListModal, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <List>
        {users.map((user, key) =>
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
      </List>
      <IconButton
        icon="more"
        palette="grayscale"
        height={36}
        transparent
        reverse={reverse}
        onClick={onOpenUserListModal}
      />
      <UserListModal users={users} />
    </Wrapper>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    picture: PropTypes.string,
    services: PropTypes.shape({
      facebook: PropTypes.string
    }).isRequired
  })).isRequired,
  onOpenUserListModal: PropTypes.func.isRequired,
  reverse: PropTypes.bool
}

export default UserList
