import { Schema, arrayOf } from 'normalizr'
import tag from '../tag/schema'
import user from '../user/schema'

const initiative = new Schema('initiatives')

initiative.define({
  user,
  users: arrayOf(user),
  tags: arrayOf(tag)
})

export default initiative
