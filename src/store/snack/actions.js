export const SNACK_SHOW = 'SNACK_SHOW'
export const SNACK_HIDE = 'SNACK_HIDE'

export const snackShow = (message, palette) => ({
  type: SNACK_SHOW,
  message,
  palette
})

export const snackHide = () => ({
  type: SNACK_HIDE
})
