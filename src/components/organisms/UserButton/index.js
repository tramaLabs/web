import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Dropdown, IconButton, Menu, MenuItem } from 'components'
import { FacebookLoginButton } from 'containers'

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin: 0 0.666em 0 -0.666em;
  }
`

const UserButton = ({ user, onUserLogout, ...props }) => {
  if (user) {
    return (
      <Dropdown onSelection={(value) => value()}>
        <IconButton type="menu" icon="down" right {...props}>
          <ButtonWrapper>
            <img src={user.picture} alt={user.name} width={24} height={24} />
            <span>{user.name}</span>
          </ButtonWrapper>
        </IconButton>
        <Menu right>
          <MenuItem value={onUserLogout}>Sair</MenuItem>
        </Menu>
      </Dropdown>
    )
  } else {
    return (
      <FacebookLoginButton {...props} />
    )
  }
}

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string
  }),
  onUserLogout: PropTypes.func.isRequired
}

export default UserButton
