import mongoose from 'mongoose'

const ownerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      unique: true,
    },
    identification: {
      type: String,
      required: true,
      unique: true,
    },
    carRegNo: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: Number,
      required: false,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Owner = mongoose.model('Owner', ownerSchema)

export default Owner
