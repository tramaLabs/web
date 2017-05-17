import React from 'react'
import { Link } from 'react-router'
import { LogoLink, YouseLink } from 'components'
import { size } from 'styled-theme'
import styled from 'styled-components'
import facebook from './facebook.png'
import medium from './medium.png'
import instagram from './instagram.png'
import flickr from './flickr.png'
import github from './github.png'


const Wrapper = styled.footer`
  background: black;
  height: 100%;
`

const InnerWrapper = styled.footer`
  margin: 0 auto;
  box-sizing: border-box;
  background: black;
  font-family: "Lato", sans-serif;
  padding: 34px 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: ${size('maxWidth')};
  padding: 2rem;
`

const TramaSocialNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 144px;
  flex-wrap: wrap;
  box-sizing: border-box;
  ul {
    list-style-type: none;
  }
  @media only screen and (max-width: 700px) {

  }
`

const SocialMedia = styled.ul`
  padding: 0;
  margin-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 144px;
  text-align: center;
  li {
    max-height: 21px;
    max-width: 21px;
    a img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
      &:hover  {
          opacity: 0.6;
      }
    }
  }
`

const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -40px;
  flex-basis: 200px;
  @media only screen and (max-width: 700px) {
    flex-basis: 70%;
    margin:30px 0px;
  }

  h2 {
       text-align: center;
      padding-top: 0;
      text-transform: uppercase;
      color: #ff8405;
      font-size: 16px;
  }
`

const TramaSitesNav = styled.nav`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 33.33%;
  box-sizing: border-box;
  ul {
    list-style-type: none;
    margin-top: 0;
    padding: 0;
    h2 {
      padding-top: 0;
      text-transform: uppercase;
      color: #ff8405;
      font-size: 16px;
    }

    li {
      list-style: none;
      a {
        text-decoration: none;
        font-size: 12px;
        color: #999;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }


`
const Platform = styled.ul``

const StyledLogoLink = styled(LogoLink)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    max-height: 144px;
    max-width: 144px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
`

const StyledYouseLink = styled(YouseLink)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    flex-basis: 100%
    object-position: center center;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
`

const Footer = (props) => {
  return (
    <Wrapper>
      <InnerWrapper {...props}>
        <TramaSocialNav>
          <StyledLogoLink />
          <SocialMedia>
            <li><Link href="http://www.facebook.com/colet.trama" title="Facebook"><img alt="facebook-logo" src={facebook} /></Link></li>
            <li><Link href="http://www.github.com/tramalabs" title="GitHub"><img alt="github-logo" src={github} /></Link></li>
            <li><Link href="https://instagram.com/ColetivoTrama" title="Instagram"><img alt="instagram-logo" src={instagram} /></Link></li>
            <li><Link href="https://flickr.com/coletivotrama" title="Flickr"><img alt="flickr-logo" src={flickr} /></Link></li>
            <li><Link href="http://medium.com/coletivo-trama" title="Medium"><img alt="medium-logo" src={medium} /></Link></li>
          </SocialMedia>
        </TramaSocialNav>
        <Sponsors>
          <h2>Apoio</h2>
          <StyledYouseLink />
        </Sponsors >
        <TramaSitesNav>
          <Platform>
            <h2>Plataforma</h2>
            <li><Link href="/" title="">Página Inicial</Link></li>
            <li><Link href="/iniciativas/criar" title="">Criar Uma Iniciativa</Link></li>
            <li><Link href="/iniciativas?q=" title="">Buscar Iniciativas</Link></li>
            <li><Link href="/colaborades" title="">Colaboradores</Link></li>
            <li><Link href="/abraseucoracao" title="">Fale Conosco</Link></li>
          </Platform>
          <ul id="coletivoTrama">
            <h2>Coletivo Trama</h2>
            <li><Link href="/manifesto" title="">Manifesto Trama</Link></li>
            <li><Link href="https://www.mesclado.com.br/trama" title="">Loja</Link></li>
          </ul>
        </TramaSitesNav>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Footer
