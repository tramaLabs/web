import { Schema, arrayOf } from 'normalizr'
import user from '../user/schema'

const initiative = new Schema('initiatives')

initiative.define({
  user,
  users: arrayOf(user)
})

export default initiative
