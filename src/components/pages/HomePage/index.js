import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Header, PageTemplate, HomeHero, InitiativeCardList, Heading } from 'components'

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

  constructor (...args) {
    super(...args)
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll () {
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

  render () {
    const { initiatives } = this.props
    const { scrolledBeyondHero } = this.state
    return (
      <PageTemplate
        header={<Header id="header" hideSearch={!scrolledBeyondHero} scrollsTranslucid />}
        hero={<HomeHero id="hero" />}
        footer={<div />}>
        <StyledHeading level={2}>Iniciativas em destaque</StyledHeading>
        <InitiativeCardList initiatives={initiatives} />
      </PageTemplate>
    )
  }
}

export default HomePage
