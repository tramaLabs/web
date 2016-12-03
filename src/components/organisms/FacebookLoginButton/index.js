import React, { PropTypes, Component } from 'react'
import { fbAppId } from 'config'

import { IconButton } from 'components'

class FacebookLoginButton extends Component {
  static propTypes = {
    onResponse: PropTypes.func.isRequired,
    loading: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
  }

  /* istanbul ignore next */
  componentDidMount () {
    const fbRoot = document.createElement('div')
    fbRoot.id = 'fb-root'

    document.body.appendChild(fbRoot)

    if (typeof window !== 'undefined') {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: fbAppId,
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

  /* istanbul ignore next */
  click () {
    if (typeof window !== 'undefined') {
      window.FB.login(({ authResponse }) => {
        if (authResponse && authResponse.accessToken) {
          this.props.onResponse(authResponse.accessToken)
        }
      }, { scope: 'email' })
    }
  }

  render () {
    const { loading, ...props } = this.props
    return (
      <IconButton
        onClick={this.click}
        icon="facebook"
        disabled={loading}
        {...props}>
        Entrar
      </IconButton>
    )
  }
}

export default FacebookLoginButton
