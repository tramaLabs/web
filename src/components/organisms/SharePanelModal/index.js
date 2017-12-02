import React from 'react'
import PropTypes from 'prop-types'
import { SharePanel, InputClipboard } from 'components'
import { Modal } from 'containers'


const SharePanelModal = ({ initiative, ...props, reverse }) => {
  return (
    <Modal
      title={'Compartilhe esta iniciativa'}
      name="sharePanelModal"
      closeable
      {...props}
    >
      {typeof window !== 'undefined' && <InputClipboard text={window.location.href} />}
      <SharePanel initiative={initiative} />
    </Modal>
  )
}

SharePanelModal.propTypes = {
  initiative: PropTypes.object,
  reverse: PropTypes.bool
}

export default SharePanelModal
