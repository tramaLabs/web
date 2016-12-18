export const initialState = {
  message: undefined,
  kind: undefined,
  show: false
}

export const getMessage = (state = initialState) => state.message || initialState.message
export const getKind = (state = initialState) => state.kind || initialState.kind
export const toShow = (state = initialState) => state.show || initialState.show
