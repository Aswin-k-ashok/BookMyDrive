import mongoose from 'mongoose'

const locationSchema = mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Location = mongoose.model('Location', locationSchema)

export default Location
