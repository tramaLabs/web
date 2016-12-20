import React, { Component } from 'react'

import { Header, PageTemplate, HomeHero } from 'components'

class HomePage extends Component {
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
    const { scrolledBeyondHero } = this.state
    return (
      <PageTemplate
        header={<Header id="header" hideSearch={!scrolledBeyondHero} scrollsTranslucid />}
        hero={<HomeHero id="hero" />}
        footer={<div />}>
        test
      </PageTemplate>
    )
  }
}

export default HomePage
