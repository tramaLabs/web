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

const InitiativeUserListModal = ({ initiative, ...props, reverse }) => {
  return (
    <Modal
      title={`Participantes (${initiative.users.length})`}
      name="initiativeUserList"
      closeable
      {...props}
    >
      {sortBy(initiative.users, 'name').map(user =>
        <User key={user.id} href={`http://www.facebook.com/${user.services.facebook}`} >
          <img src={user.picture} alt={`Foto de ${user.name}`} width={38} height={38} />
          <Block reverse={reverse}>{user.name}</Block>
        </User>
      )}
    </Modal>
  )
}

InitiativeUserListModal.propTypes = {
  initiative: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      picture: PropTypes.string,
      services: PropTypes.shape({
        facebook: PropTypes.string
      }).isRequired
    })).isRequired
  }).isRequired,
  reverse: PropTypes.bool
}

export default InitiativeUserListModal
