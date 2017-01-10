export const SNACK_SHOW = 'SNACK_SHOW'
export const SNACK_HIDE = 'SNACK_HIDE'

export const snackShow = (message, color) => ({
  type: SNACK_SHOW,
  message,
  color
})

export const snackHide = () => ({
  type: SNACK_HIDE
})
