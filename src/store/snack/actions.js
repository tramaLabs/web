export const SNACK_SHOW = 'SNACK_SHOW'
export const SNACK_HIDE = 'SNACK_HIDE'

export const snackShow = (message, kind) => ({
  type: SNACK_SHOW,
  message,
  kind
})

export const snackHide = () => ({
  type: SNACK_HIDE
})
