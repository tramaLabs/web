import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Button, Icon } from 'components'

class FacebookLoginButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
  }

  componentDidMount () {
    const fbRoot = document.createElement('div')
    fbRoot.id = 'fb-root'

    document.body.appendChild(fbRoot)

    if (typeof window !== 'undefined') {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '534673583399194',
          version: 'v2.7'
        })
      }

      ;((d, s, id) => {
        const element = d.getElementsByTagName(s)[0]
        const fjs = element
        let js = element
        if (d.getElementById(id)) { return }
        js = d.createElement(s)
        js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }

  click () {
    if (typeof window !== 'undefined') {
      window.FB.login(({ authResponse }) => {
        if (authResponse && authResponse.accessToken) {
          this.props.onClick(authResponse.accessToken)
        }
      }, { scope: 'email' })
    }
  }

  render () {
    return (
      <Button onClick={this.click}>
        <Icon icon="facebook" style={{ marginRight: 8 }} />
        Continue with Facebook
      </Button>
    )
  }
}

export default FacebookLoginButton
