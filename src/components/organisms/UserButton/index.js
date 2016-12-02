import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton'

import { colors, fonts } from 'components/globals'
import { IconButton } from 'components'
import FacebookLoginButton from 'containers/FacebookLoginButton'

const StyledWrapper = styled(Wrapper)`
  display: inline-block;
  position: relative;
`

const StyledIconButton = styled(IconButton)`
  padding: 0 0.5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin-right: 0.5rem;
  }
`

const StyledMenu = styled(Menu)`
  position: absolute;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[0]};
  background-color: white;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${colors.grayscale[3]};
  box-sizing: border-box;
  z-index: 999;
`

const StyledMenuItem = styled(MenuItem)`
  padding: 0.5rem;
  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

const UserButton = ({ user, onUserLogout, ...props }) => {
  if (user) {
    return (
      <StyledWrapper onSelection={(value) => value()}>
        <Button tag={StyledIconButton} icon="down" right {...props}>
          <ButtonWrapper>
            <img src={user.picture} alt={user.name} width={24} height={24} />
            <span>{user.name}</span>
          </ButtonWrapper>
        </Button>
        <StyledMenu>
          <StyledMenuItem value={onUserLogout}>Sair</StyledMenuItem>
        </StyledMenu>
      </StyledWrapper>
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
