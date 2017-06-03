import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Header, Footer, PageTemplate, HomeHero, InitiativeCardList, Heading } from 'components'

const StyledHeading = styled(Heading)`
  margin: 3rem 1rem 1rem;
`

class HomePage extends Component {
  static propTypes = {
    initiatives: PropTypes.array
  }

  state = {
    scrolledBeyondHero: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const header = document.querySelector('#header')
    const hero = document.querySelector('#hero')
    const scrollTop = window.scrollY
    const scrolledBeyondHero = scrollTop >= hero.clientHeight - header.clientHeight

    if (scrolledBeyondHero && !this.state.scrolledBeyondHero) {
      this.setState({ scrolledBeyondHero: true })
    } else if (!scrolledBeyondHero && this.state.scrolledBeyondHero) {
      this.setState({ scrolledBeyondHero: false })
    }
  }

  render() {
    const { initiatives } = this.props
    const { scrolledBeyondHero } = this.state
    return (
      <PageTemplate
        header={<Header id="header" hideSearch={!scrolledBeyondHero} scrollsTranslucid />}
        hero={<HomeHero id="hero" />}
        footer={<Footer />}
      >
<<<<<<< HEAD
        <Helmet
          title="Trama"
          meta={[
              { name: 'description', content: 'Experiências encurtam distâncias. Compartilhe sua ideia, encontre pessoas engajadas e participe do que acontece ao seu redor.' },
              { property: 'og:site_name', content: 'Trama' },
              { property: 'og:image', content: 'd021cc017c7a0718a0e27240337fa5d0.jpg' },
              { property: 'og:image:type', content: 'image/jpeg' },
          ]}
        />
=======
>>>>>>> parent of 3b17046... Teste de Tags OG
        <StyledHeading level={2}>Descubra iniciativas</StyledHeading>
        <InitiativeCardList initiatives={initiatives} />
      </PageTemplate>
    )
  }
}

export default HomePage
