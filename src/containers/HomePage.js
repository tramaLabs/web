import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromEntities } from 'store/selectors'
import { initiativeListRead } from 'store/actions'

import { HomePage } from 'components'

class HomePageContainer extends Component {
  static propTypes = {
    readInitiativeList: PropTypes.func.isRequired
  }

  static all({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(initiativeListRead.request({}, resolve, reject))
    })
  }

  componentDidMount() {
    const { readInitiativeList } = this.props
    readInitiativeList()
  }

  render() {
    return <HomePage {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  initiatives: fromEntities.getList(state, 'initiative')
})

const mapDispatchToProps = (dispatch) => ({
  readInitiativeList: () => dispatch(initiativeListRead.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
