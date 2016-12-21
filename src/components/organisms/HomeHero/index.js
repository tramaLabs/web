import React from 'react'
import styled from 'styled-components'

import { reverseColors } from 'components/globals'
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
  background: radial-gradient(closest-corner at 50% 25%, transparent -100%, black 300%);
`

const Main = styled.div`
  position: relative;
`

const StyledParagraph = styled(Paragraph)`
  color: ${reverseColors.grayscale[0]};
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

const StyledHeading = styled(Heading)`
  color: white;
`

const HomeHero = (props) => {
  return (
    <Wrapper {...props}>
      <Shadow />
      <Main>
        <StyledParagraph>
          Nós acreditamos no poder de iniciativas que mobilizem pessoas, espaços e ações. Criamos conexões e catalisamos ações colaborativas através de uma rede, uma trama criativa.
        </StyledParagraph>
        <Button to="/iniciativas/criar" size={54}>Criar iniciativa</Button>
      </Main>
      <SearchBox>
        <StyledHeading level={2}>Colabore com iniciativas</StyledHeading>
        <SearchForm kind="grayscale" transparent light borderless />
      </SearchBox>
    </Wrapper>
  )
}

export default HomeHero
