import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus, fromInitiative, fromUser, fromEntities } from 'store/selectors'
import { initiativeDetailRead, INITIATIVE_DETAIL_READ } from 'store/actions'

import { InitiativeDetailPage } from 'components'

class InitiativeDetailPageContainer extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.any
    }).isRequired,
    readInitiativeDetail: PropTypes.func.isRequired
  }

  static all ({ params, store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(initiativeDetailRead.request(params.id, resolve, reject))
    })
  }

  componentDidMount () {
    const { params, readInitiativeDetail } = this.props
    readInitiativeDetail(params.id)
  }

  render () {
    return <InitiativeDetailPage {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, INITIATIVE_DETAIL_READ),
  initiative: fromEntities.getDetail(state, 'initiative', fromInitiative.getDetail(state)),
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})

const mapDispatchToProps = (dispatch) => ({
  readInitiativeDetail: (id) => dispatch(initiativeDetailRead.request(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailPageContainer)
