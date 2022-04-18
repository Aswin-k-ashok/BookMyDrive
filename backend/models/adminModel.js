import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const adminSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
})

adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
