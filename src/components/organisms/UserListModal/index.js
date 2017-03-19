import React, { PropTypes } from 'react'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'

import { Block } from 'components'
import { Modal } from 'containers'

const User = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  > img {
    margin-right: 0.5rem;
  }
`

const UserListModal = ({ users, title, ...props, reverse }) => {
  return (
    <Modal
      title={`${title} (${users.length})`}
      name="userList"
      closeable
      {...props}
    >
      {sortBy(users, 'name').map(user =>
        <User key={user.id} href={`http://www.facebook.com/${user.services.facebook}`} >
          <img src={user.picture} alt={`Foto de ${user.name}`} width={38} height={38} />
          <Block reverse={reverse}>{user.name}</Block>
        </User>
      )}
    </Modal>
  )
}

UserListModal.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    picture: PropTypes.string,
    services: PropTypes.shape({
      facebook: PropTypes.string
    }).isRequired
  })).isRequired,
  title: PropTypes.string,
  reverse: PropTypes.bool
}

export default UserListModal
