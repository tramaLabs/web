import React from 'react'
import { connect } from 'react-redux'
import { fromSnack } from 'store/selectors'

import { Snack } from 'components'

const SnackContainer = props => <Snack {...props} />

const mapStateToProps = (state) => ({
  show: fromSnack.toShow(state),
  palette: fromSnack.getPalette(state),
  children: fromSnack.getMessage(state)
})

export default connect(mapStateToProps)(SnackContainer)
