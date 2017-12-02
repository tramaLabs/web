import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block, Caption } from 'components'
import { UserList } from 'containers'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
`

const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const UserInfo = styled.div`
  margin-left: 0.5rem;
`

const InitiativeDetailUser = ({ initiative, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <UserWrapper>
        <a href={`http://www.facebook.com/${initiative.user.services.facebook}`}>
          <img height={60} src={initiative.user.picture} alt={`Foto de ${initiative.user.name}`} />
        </a>
        <UserInfo>
          <Caption reverse={reverse}>Organização</Caption>
          <Block reverse={reverse}>{initiative.user.name}</Block>
        </UserInfo>
      </UserWrapper>
      <Caption reverse={reverse}>Participando</Caption>
      <UserList modalName={`${initiative.id}-modal`} modalTitle="Participantes" reverse={reverse} users={initiative.users} />
    </Wrapper>
  )
}

InitiativeDetailUser.propTypes = {
  initiative: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
      services: PropTypes.shape({
        facebook: PropTypes.string
      }).isRequired
    }).isRequired
  }).isRequired,
  reverse: PropTypes.bool
}

export default InitiativeDetailUser
