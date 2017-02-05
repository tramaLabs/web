import React, { PropTypes } from 'react'

import { SharePanel, Input } from 'components'
import { Modal } from 'containers'


const SharePanelModal = ({ initiative, ...props, reverse }) => {
  return (
    <Modal
      title={'Compartilhe esta iniciativa'}
      name="sharePanelModal"
      closeable
      {...props}
    >
      {typeof window !== 'undefined' && <Input value={window.location.href} />}
      <SharePanel initiative={initiative} />
    </Modal>
  )
}

SharePanelModal.propTypes = {
  initiative: PropTypes.object,
  reverse: PropTypes.bool
}

export default SharePanelModal
