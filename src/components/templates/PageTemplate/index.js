import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { breakpoints, headerHeight } from 'components/globals'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: ${headerHeight};
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${headerHeight};
  z-index: 999;
`

const Hero = styled.section`
  margin-top: -${headerHeight};
`

const Content = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: calc(${breakpoints.maxWidth} + 2rem);
  box-sizing: border-box;
`

const Heading = styled.section`
  margin: 7rem 0 3rem;
  padding: 1rem;
  width: 70%;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    margin: 0;
    width: 100%;
  }
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, hero, heading, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content>
        {heading && <Heading>{heading}</Heading>}
        {children}
      </Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  hero: PropTypes.any,
  heading: PropTypes.any,
  children: PropTypes.any,
  footer: PropTypes.any.isRequired
}

export default PageTemplate
