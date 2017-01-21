import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Block, LogoLink, Link } from 'components'
import { SearchForm, UserButton } from 'containers'

const Wrapper = styled(Block)`
  height: 100%;
  transition: background-color 250ms ease-in-out;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: ${size('maxWidth')};
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

const StyledSearchForm = styled((props) => <SearchForm {...props} />)`
  flex: 1;
  margin: 0 2rem;
  color: ${palette('grayscale', 0)};
  visibility: ${ifProp('hideSearch', 'hidden', 'visible')};
  opacity: ${ifProp('hideSearch', 0, 1)};
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

class Header extends Component {
  static propTypes = {
    scrollsTranslucid: PropTypes.bool,
    hideSearch: PropTypes.bool,
    reverse: PropTypes.bool
  }

  state = {
    scrolled: false
  }

  componentDidMount () {
    if (this.props.scrollsTranslucid) {
      const { userAgent } = window.navigator
      const isSafariOrIOS = userAgent.indexOf('Safari') >= 0 &&
        userAgent.indexOf('Chrome') === -1 ||
        (/(iPad|iPhone|iPod)/gi).test(userAgent)
      if (isSafariOrIOS) {
        this.setState({ scrolled: true })
      } else {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.scrollY

    if (scrollTop > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true })
    } else if (scrollTop <= 0 && this.state.scrolled) {
      this.setState({ scrolled: false })
    }
  }

  render () {
    const { reverse, hideSearch, scrollsTranslucid, ...props } = this.props
    return (
      <Wrapper
        reverse={!reverse}
        opaque={!scrollsTranslucid || this.state.scrolled}
        {...props}>
        <InnerWrapper reverse={reverse}>
          <StyledLogoLink height={35} reverse={reverse} />
          <StyledSearchForm
            hideSearch={hideSearch}
            palette="grayscale"
            transparent
            reverse={!reverse} />
          <Nav>
            <UserButton palette="alpha" reverse={!reverse} responsive />
            <StyledLink to="/" palette="grayscale" reverse={!reverse}>Manifesto</StyledLink>
          </Nav>
        </InnerWrapper>
      </Wrapper>
    )
  }
}

export default Header
