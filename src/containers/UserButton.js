import { connect } from 'react-redux'
import { fromEntities, fromUser } from 'store/selectors'
import { authLogout } from 'store/actions'

import UserButton from 'components/organisms/UserButton'

const mapStateToProps = (state) => ({
  user: fromEntities.getUser(state, fromUser.getCurrentId(state))
})

const mapDispatchToProps = {
  onUserLogout: authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButton)
