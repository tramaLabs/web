import { Schema, arrayOf } from 'normalizr'
import user from '../user/schema'
import tag from '../tag/schema'

const initiative = new Schema('initiatives')

initiative.define({
  user,
  users: arrayOf(user),
  tags: arrayOf(tag)
})

export default initiative
