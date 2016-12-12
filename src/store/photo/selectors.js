export const initialState = {
  progress: 0
}

export const getProgress = (state = initialState) => state.progress || initialState.progress
