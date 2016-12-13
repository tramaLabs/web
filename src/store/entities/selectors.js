import { denormalize } from 'denormalizr'
import { arrayOf } from 'normalizr'
import initiative from '../initiative/schema'
import user from '../user/schema'
import tag from '../tag/schema'
import photo from '../photo/schema'

export const initialState = {
  initiatives: {},
  photos: {},
  tags: {},
  users: {}
}

export const getNormalizedInitiatives = (state = initialState) => state.initiatives || {}
export const getNormalizedPhotos = (state = initialState) => state.photos || {}
export const getNormalizedTags = (state = initialState) => state.tags || {}
export const getNormalizedUsers = (state = initialState) => state.users || {}

export const getInitiatives = (state = initialState, ids) =>
  denormalize(ids || Object.keys(getNormalizedInitiatives(state)), state, arrayOf(initiative))
export const getInitiative = (state = initialState, id) =>
  denormalize(getNormalizedInitiatives(state)[id], state, initiative)

export const getPhotos = (state = initialState, ids) =>
  denormalize(ids || Object.keys(getNormalizedPhotos(state)), state, arrayOf(photo))
export const getPhoto = (state = initialState, id) =>
  denormalize(getNormalizedPhotos(state)[id], state, photo)

export const getTags = (state = initialState, ids) =>
  denormalize(ids || Object.keys(getNormalizedTags(state)), state, arrayOf(tag))
export const getTag = (state = initialState, id) =>
  denormalize(getNormalizedTags(state)[id], state, tag)

export const getUsers = (state = initialState, ids) =>
  denormalize(ids || Object.keys(getNormalizedUsers(state)), state, arrayOf(user))
export const getUser = (state = initialState, id) =>
  denormalize(getNormalizedUsers(state)[id], state, user)
