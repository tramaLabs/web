import { denormalize } from 'denormalizr'
import * as schemas from './schemas'

export const initialState = {}

export const getEntity = (state = initialState, entity) => state[entity] || {}

export const getDetail = (state = initialState, entity, id) =>
  denormalize(getEntity(state, entity)[id], state, schemas[entity])

export const getList = (state = initialState, entity, ids) =>
  (ids || Object.keys(getEntity(state, entity))).map((id) => getDetail(state, entity, id))
