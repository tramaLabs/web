import { connect } from 'react-redux'
import { authFacebook } from 'store'

import { FacebookLoginButton } from 'components'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch, { location }) => ({
  onClick: (fbToken) => dispatch(authFacebook.request(fbToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
