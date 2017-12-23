/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderToStaticMarkup } from 'react-dom/server'

class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  state = {
    inViewport: false,
    loaded: false,
    javascriptEnabled: false
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ javascriptEnabled: true })
    window.setTimeout(() => {
      this.setImageState()
      window.addEventListener('scroll', this.setImageState, true)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setImageState, true)
  }

  setImageState = () => {
    const { image } = this

    if (this.isInViewport()) {
      this.setState({ inViewport: true })
      window.removeEventListener('scroll', this.setImageState, true)

      if (!image.complete) {
        image.addEventListener('load', () => this.setState({ loaded: true }))
      } else {
        this.setState({ loaded: true })
      }
    }
  }

  isInViewport() {
    const { image } = this
    const rect = image.getBoundingClientRect()

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  render() {
    const { src, ...props } = this.props
    const { javascriptEnabled, inViewport, loaded } = this.state
    if (javascriptEnabled) {
      return (<img
        alt="Lazy"
        ref={image => { this.image = image }}
        src={inViewport ? src : undefined}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 500ms ease' }}
        {...props}
      />)
    }
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: renderToStaticMarkup(<img alt="Lazy" {...this.props} />)
        }}
      />
    )
  }
}

export default LazyImage
