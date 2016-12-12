import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromInitiative, fromEntities, fromStatus } from 'store/selectors'
import { initiativeListRead, INITIATIVE_LIST_READ } from 'store/actions'

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
  list: fromEntities.getInitiatives(state, fromInitiative.getIds(state)),
  loading: fromStatus.isLoading(state, INITIATIVE_LIST_READ)
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(initiativeListRead.request({ limit }))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeListContainer)
