import { connect } from 'react-redux'
import { authFacebook, fromStatus, AUTH } from 'store'

import FacebookLoginButton from 'components/organisms/FacebookLoginButton'

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, AUTH)
})

const mapDispatchToProps = (dispatch, { location }) => ({
  onResponse: (fbToken) => dispatch(authFacebook.request(fbToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
