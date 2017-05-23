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
`

const InnerWrapper = styled.footer`
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  padding: 55px 5vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${size('maxWidth')};
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
`

const TramaSocialNav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 144px;
  box-sizing: border-box;
  ul {
    list-style-type: none;
    padding: 0;
  }
`

const SocialMedia = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  width: 144px;
  text-align: center;
  li {
    max-height: 21px;
    max-width: 21px;
    a img {
      width: auto !important;
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
  flex-basis: 200px;
  @media only screen and (max-width: 500px) {
    flex-basis: 100%;
    margin-top: 55px;
    a {
        text-align: center;
    }
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
  display: flex;
  flex-wrap: wrap;
  flex-basis: 33.33%;
  box-sizing: border-box;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
        flex-basis: 100%;
        justify-content: space-around;
        margin-top: 55px;
  }
  ul {
    list-style-type: none;
    margin-top: 0;
    padding: 0;
    box-sizing: border-box;
    @media only screen and (max-width: 900px) {
        flex-basis: 100%;
    }
    @media only screen and (max-width: 768px) {
        flex-basis: 33.33%;
        text-align: center;
    }
    @media only screen and (max-width: 500px) {
        flex-basis: 100%;
        text-align: center;
    }
    h2 {
      padding-top: 0;
      text-transform: uppercase;
      color: #ff8405;
      font-size: 16px;
    }
    
    li {
      list-style: none;
      @media only screen and (max-width: 500px) {
        padding: 21px 34px;
        border: 1px solid #333;
        &hover {
        background: rgba(255,255,255,0.1);
      }
      } 
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
    img {
        object-fit: contain;
        object-position: center center;
        max-height: 144px;
        max-width: 144px;
    }
`

const StyledYouseLink = styled(YouseLink)`
    
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
