import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { Caption } from 'components'
import { InitiativeUserList } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[0]};
`

const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const UserInfo = styled.div`
  margin-left: 0.5rem;
`

const InitiativeDetailUser = ({ initiative, ...props }) => {
  return (
    <Wrapper {...props}>
      <UserWrapper>
        <img height={60} src={initiative.user.picture} alt={`Foto de ${initiative.user.name}`} />
        <UserInfo>
          <Caption>Organização</Caption>
          <div>{initiative.user.name}</div>
        </UserInfo>
      </UserWrapper>
      <Caption>Participando</Caption>
      <InitiativeUserList initiative={initiative} />
    </Wrapper>
  )
}

InitiativeDetailUser.propTypes = {
  initiative: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    }).isRequired
  }).isRequired
}

export default InitiativeDetailUser
