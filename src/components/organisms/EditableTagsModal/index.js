import React, { PropTypes } from 'react'

import { Tags, Button } from 'components'
import { Modal } from 'containers'


const EditableTagsModal = ({ initiative, ...props }) => {
  return (
    <Modal
      title={'Edite as tags'}
      name="EditableTagsModal"
      closeable
      {...props}
    >
      {typeof window !== 'undefined' && <Tags tags={initiative.tags} />}
      <Button />
    </Modal>
  )
}

EditableTagsModal.propTypes = {
  initiative: PropTypes.object,
  reverse: PropTypes.bool
}

export default EditableTagsModal
