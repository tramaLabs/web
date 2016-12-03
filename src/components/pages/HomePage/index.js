import React, { Component } from 'react'

import { Header, PageTemplate, HomeHero } from 'components'

class HomePage extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      scrolled: false,
      scrolledBeyondHero: false
    }
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

    if (scrollTop > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true })
    } else if (scrollTop <= 0 && this.state.scrolled) {
      this.setState({ scrolled: false })
    }

    if (scrolledBeyondHero && !this.state.scrolledBeyondHero) {
      this.setState({ scrolledBeyondHero: true })
    } else if (!scrolledBeyondHero && this.state.scrolledBeyondHero) {
      this.setState({ scrolledBeyondHero: false })
    }
  }

  render () {
    const { scrolled, scrolledBeyondHero } = this.state
    return (
      <PageTemplate
        header={<Header id="header" transparent={!scrolled} hideSearch={!scrolledBeyondHero} />}
        hero={<HomeHero id="hero" />}
        footer={<div />}>
        test
      </PageTemplate>
    )
  }
}

export default HomePage
