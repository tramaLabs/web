import { schema } from 'normalizr'
import {
  CURRENT_USER_READ_SUCCESS,
  INITIATIVE_CREATE_SUCCESS,
  INITIATIVE_LIST_READ_SUCCESS,
  INITIATIVE_DETAIL_READ_SUCCESS,
  INITIATIVE_UPDATE_SUCCESS,
  INITIATIVE_JOIN_SUCCESS,
  INITIATIVE_LEAVE_SUCCESS,
  INITIATIVE_PHOTO_UPDATE_SUCCESS,
  INITIATIVE_DEMANDS_UPDATE_SUCCESS,
  INITIATIVE_DONORS_UPDATE_SUCCESS,
  TAG_CREATE_SUCCESS,
  TAG_LIST_SUCCESS,
  TAG_LIST_EXTRACT_SUCCESS
} from '../actions'

export const user = new schema.Entity('user')

export const donor = new schema.Entity('demand', {
  user,
})

export const demand = new schema.Entity('demand', {
  creator: user,
  donors: [donor],
})

export const tag = new schema.Entity('tag')

export const initiative = new schema.Entity('initiative', {
  user,
  demands: [demand],
  users: [user],
  tags: [tag]
})

export const actionsMeta = {
  [CURRENT_USER_READ_SUCCESS]: { property: 'detail', schema: user },
  [INITIATIVE_CREATE_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_LIST_READ_SUCCESS]: { property: 'list', schema: [initiative] },
  [INITIATIVE_DETAIL_READ_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_UPDATE_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_JOIN_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_LEAVE_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_PHOTO_UPDATE_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_DEMANDS_UPDATE_SUCCESS]: { property: 'detail', schema: initiative },
  [INITIATIVE_DONORS_UPDATE_SUCCESS]: { property: 'detail', schema: demand },
  [TAG_CREATE_SUCCESS]: { property: 'detail', schema: tag },
  [TAG_LIST_SUCCESS]: { property: 'list', schema: [tag] },
  [TAG_LIST_EXTRACT_SUCCESS]: { property: 'list', schema: [tag] }
}
