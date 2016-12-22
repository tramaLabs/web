import React, { PropTypes } from 'react'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'

import { Modal } from 'containers'

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  > img {
    margin-right: 0.5rem;
  }
`

const InitiativeUserListModal = ({ initiative, ...props }) => {
  return (
    <Modal
      title={`Participantes (${initiative.users.length})`}
      name="initiativeUserList"
      closeable
      {...props}>
      {sortBy(initiative.users, 'name').map((user, key) =>
        <User key={key}>
          <img src={user.picture} alt={`Foto de ${user.name}`} width={38} />
          <span>{user.name}</span>
        </User>
      )}
    </Modal>
  )
}

InitiativeUserListModal.propTypes = {
  initiative: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    })).isRequired
  }).isRequired
}

export default InitiativeUserListModal
