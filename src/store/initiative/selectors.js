export const initialState = {
  list: [],
  item: null
}

export const getList = (state = initialState) => state.list || initialState.list
export const getItem = (state = initialState) => state.item || initialState.item
