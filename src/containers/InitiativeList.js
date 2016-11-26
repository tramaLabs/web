import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { initiativeList, fromInitiative, fromStatus, INITIATIVE_LIST } from 'store'

import { InitiativeList } from 'components'

class InitiativeListContainer extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired
  }

  static defaultProps = {
    limit: 20
  }

  componentDidMount () {
    this.props.request()
  }

  render () {
    const { list, loading } = this.props
    return <InitiativeList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromInitiative.getList(state),
  loading: fromStatus.isLoading(state, INITIATIVE_LIST)
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(initiativeList.request(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeListContainer)
