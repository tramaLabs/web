import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus, fromUser, fromPhoto, fromEntities } from 'store/selectors'
import { photoPreview, photoUpload, PHOTO_UPLOAD, PHOTO_PREVIEW } from 'store/actions'

import { InitiativeDetailCover } from 'components'

class InitiativeDetailCoverContainer extends Component {
  render () {
    return <InitiativeDetailCover {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromEntities.getUser(state, fromUser.getCurrentId(state)),
  photo: fromEntities.getPhoto(state, fromPhoto.getId(state)),
  uploadLoading: fromStatus.isLoading(state, PHOTO_UPLOAD),
  uploadProgress: fromPhoto.getUploadProgress(state),
  preview: fromPhoto.getPreviewUrl(state),
  previewLoading: fromStatus.isLoading(state, PHOTO_PREVIEW)
})

const mapDispatchToProps = (dispatch) => ({
  onSelect: (file) => dispatch(photoPreview.request(file)),
  onUpload: (file) => dispatch(photoUpload.request(file)),
  onCancel: () => dispatch(photoPreview.cancel())
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailCoverContainer)
