import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { LogoLink, Link } from 'components'
import SearchForm from 'containers/SearchForm'
import UserButton from 'containers/UserButton'

const Wrapper = styled.div`
  background-color: ${(props) => props.transparent ? 'transparent' : colors.grayscale[0]};
  height: 100%;
  font-family: ${fonts.primary};
  color: ${[ ...colors.grayscale ].reverse()[0]};
  transition: background-color 250ms ease-in-out;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 640px) {
    padding: 0 0.5rem;
  }
`

const StyledLogoLink = styled(LogoLink)`
  height: 50%;
  margin: 0 0.5rem;
`

const StyledSearchForm = styled(SearchForm)`
  flex: 1;
  margin: 0 2rem;
  color: ${colors.grayscale[0]};
  visibility: ${(props) => props.hideSearch ? 'hidden' : 'visible'};
  opacity: ${(props) => props.hideSearch ? 0 : 1};
  transition: opacity 250ms ease-in-out;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > * {
    margin: 0.5rem;
  }
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    display: none;
  }
`

const Header = ({ hideSearch, ...props }) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <StyledLogoLink height="100%" />
        <StyledSearchForm
          hideSearch={hideSearch}
          kind="grayscale"
          borderless
          transparent
          light />
        <Nav>
          <UserButton kind="grayscale" light responsive />
          <StyledLink to="/" kind="grayscale" light>Manifesto</StyledLink>
        </Nav>
      </InnerWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  transparent: PropTypes.bool,
  hideSearch: PropTypes.bool
}

export default Header
