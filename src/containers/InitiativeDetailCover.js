import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromStatus, fromUser, fromInitiative, fromEntities } from 'store/selectors'
import {
  initiativePhotoPreview,
  initiativePhotoUpdate,
  INITIATIVE_PHOTO_UPDATE,
  INITIATIVE_PHOTO_PREVIEW
} from 'store/actions'

import { InitiativeDetailCover } from 'components'

const InitiativeDetailCoverContainer = props => <InitiativeDetailCover {...props} />

InitiativeDetailCoverContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any
  }).isRequired
}

const mapStateToProps = (state) => ({
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state)),
  uploadLoading: fromStatus.isLoading(state, INITIATIVE_PHOTO_UPDATE),
  uploadProgress: fromInitiative.getPhotoUpdateProgress(state),
  preview: fromInitiative.getPhotoPreviewUrl(state),
  previewLoading: fromStatus.isLoading(state, INITIATIVE_PHOTO_PREVIEW)
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onPhotoSelect: (file) => dispatch(initiativePhotoPreview.request(file)),
  onPhotoUpload: (file) => dispatch(initiativePhotoUpdate.request(initiative.id, file)),
  onPreviewCancel: () => dispatch(initiativePhotoPreview.cancel())
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailCoverContainer)
