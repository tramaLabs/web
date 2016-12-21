import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { InitiativeUserList } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[0]};
  padding: 0.5rem;
  > * {
    margin: 0.5rem;
  }
`

const Title = styled.span`
  display: block;
  color: ${colors.grayscale[2]};
  margin-bottom: 0.3rem;
`

const UserWrapper = styled.div`
  display: flex;
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
          <Title>Organização</Title>
          <div>{initiative.user.name}</div>
        </UserInfo>
      </UserWrapper>
      <Title>Participando</Title>
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
