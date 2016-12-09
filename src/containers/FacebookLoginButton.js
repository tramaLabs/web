import { connect } from 'react-redux'
import { authFacebook, fromStatus, AUTH } from 'store'
import { fbAppId } from 'config'

import FacebookLoginButton from 'components/organisms/FacebookLoginButton'

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, AUTH),
  appId: fbAppId
})

const mapDispatchToProps = (dispatch) => ({
  onSuccess: (fbToken) => dispatch(authFacebook.request(fbToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton)
