import { connect } from 'react-redux'
import { fromStatus } from 'store/selectors'
import { authFacebook, AUTH } from 'store/actions'
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
