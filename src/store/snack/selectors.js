export const initialState = {
  message: undefined,
  color: undefined,
  show: false
}

export const getMessage = (state = initialState) => state.message || initialState.message
export const getColor = (state = initialState) => state.color || initialState.color
export const toShow = (state = initialState) => state.show || initialState.show
