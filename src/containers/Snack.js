import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromSnack } from 'store/selectors'

import { Snack } from 'components'

class SnackContainer extends Component {
  render () {
    return <Snack {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  show: fromSnack.toShow(state),
  kind: fromSnack.getKind(state),
  children: fromSnack.getMessage(state)
})

export default connect(mapStateToProps)(SnackContainer)
