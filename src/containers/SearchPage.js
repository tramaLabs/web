import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { change } from 'redux-form'
import { fromStatus, fromEntities } from 'store/selectors'
import { initiativeListRead, INITIATIVE_LIST_READ } from 'store/actions'

import { SearchPage } from 'components'

class SearchPageContainer extends Component {
  static propTypes = {
    params: PropTypes.object,
    location: PropTypes.shape({
      query: PropTypes.shape({
        q: PropTypes.string
      }).isRequired
    }).isRequired,
    readInitiativeList: PropTypes.func.isRequired
  }

  static all({ location: { query }, store }) {
    store.dispatch(change('SearchForm', 'q', query.q))
    return new Promise((resolve, reject) => {
      store.dispatch(initiativeListRead.request({ q: query.q }, resolve, reject))
    })
  }

  componentDidMount() {
    const { location, readInitiativeList } = this.props
    readInitiativeList({ q: location.query.q })
  }

  render() {
    return <SearchPage {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, INITIATIVE_LIST_READ),
  initiatives: fromEntities.getList(state, 'initiative')
})

const mapDispatchToProps = (dispatch) => ({
  readInitiativeList: (params) => dispatch(initiativeListRead.request(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer)
