export const initialState = {
  initiatives: {},
  users: {}
}

export const getInitiatives = (state = initialState) => state.initiatives || {}
export const getInitiative = (state, id) => getInitiatives(state)[id]
export const getUsers = (state = initialState) => state.users || {}
export const getUser = (state, id) => getUsers(state)[id]
