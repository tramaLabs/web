export const initialState = {
  message: undefined,
  palette: undefined,
  show: false
}

export const getMessage = (state = initialState) => state.message || initialState.message
export const getPalette = (state = initialState) => state.palette || initialState.palette
export const toShow = (state = initialState) => state.show || initialState.show
