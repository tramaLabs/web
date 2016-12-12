export const PHOTO_UPLOAD = 'PHOTO_UPLOAD'
export const PHOTO_UPLOAD_REQUEST = 'PHOTO_UPLOAD_REQUEST'
export const PHOTO_UPLOAD_SUCCESS = 'PHOTO_UPLOAD_SUCCESS'
export const PHOTO_UPLOAD_FAILURE = 'PHOTO_UPLOAD_FAILURE'
export const PHOTO_UPLOAD_PROGRESS = 'PHOTO_UPLOAD_PROGRESS'

export const photoUpload = {
  request: (data, resolve, reject) => ({ type: PHOTO_UPLOAD_REQUEST, data, resolve, reject }),
  success: (data) => ({ type: PHOTO_UPLOAD_SUCCESS, ...data }),
  failure: (error) => ({ type: PHOTO_UPLOAD_FAILURE, error }),
  progress: (progress) => ({ type: PHOTO_UPLOAD_PROGRESS, progress })
}
