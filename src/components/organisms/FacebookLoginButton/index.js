import React, { PropTypes, Component } from 'react'

import { IconButton } from 'components'

class FacebookLoginButton extends Component {
  static propTypes = {
    version: PropTypes.string,
    appId: PropTypes.string.isRequired,
    scope: PropTypes.string,
    onSuccess: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    label: PropTypes.string
  }

  static defaultProps = {
    version: 'v2.7',
    scope: 'email',
    label: 'Entrar'
  }

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /* istanbul ignore next */
  componentDidMount () {
    if (document.getElementById('fb-root')) return

    const { appId, version } = this.props
    const fbRoot = document.createElement('div')
    fbRoot.id = 'fb-root'

    document.body.appendChild(fbRoot)

    window.fbAsyncInit = () => {
      window.FB.init({ appId, version })
    }

    ;((d, s, id) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  /* istanbul ignore next */
  handleClick (e) {
    const { onSuccess, scope } = this.props

    window.FB.login(({ authResponse }) => {
      if (authResponse && authResponse.accessToken) {
        onSuccess(authResponse.accessToken)
      }
    }, { scope })
  }

  render () {
    const { loading, label, ...props } = this.props
    return (
      <IconButton onClick={this.handleClick} icon="facebook" loading={loading} {...props}>
        {label}
      </IconButton>
    )
  }
}

export default FacebookLoginButton
