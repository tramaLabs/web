export const initialState = {
  ids: [],
  id: null
}

export const getIds = (state = initialState) => state.ids || initialState.ids
export const getId = (state = initialState) => state.id || initialState.id
