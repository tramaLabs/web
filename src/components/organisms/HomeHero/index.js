import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Heading, Button } from 'components'
import { SearchForm } from 'containers'
import background from './background.jpg'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  min-height: 500px;
  max-height: 700px;
  padding: 2rem 6rem;
  box-sizing: border-box;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    closest-corner at 50% 25%,
    transparent -100%,
    ${palette('grayscale', 0)} 300%
  );
`

const Main = styled.div`
  position: relative;
`

const StyledParagraph = styled(Paragraph)`
  margin: 3rem auto 2rem;
  max-width: 800px;
  font-size: 1.625rem;
  font-weight: 400;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const SearchBox = styled.div`
  position: relative;
  margin: 0.5rem;
  width: 100%;
  max-width: 600px;
`

const HomeHero = ({ ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <Shadow reverse={reverse} />
      <Main>
        <StyledParagraph reverse={!reverse}>
         Experiências encurtam distâncias. Compartilhe sua ideia, encontre pessoas engajadas e participe do que acontece ao seu redor.
        </StyledParagraph>
        <Button to="/iniciativas/criar" height={54}>Criar iniciativa</Button>
      </Main>
      <SearchBox>
        <Heading level={2} reverse={!reverse}>Busque iniciativas</Heading>
        <SearchForm palette="grayscale" transparent reverse={!reverse} />
      </SearchBox>
    </Wrapper>
  )
}

HomeHero.propTypes = {
  reverse: PropTypes.bool
}

export default HomeHero
