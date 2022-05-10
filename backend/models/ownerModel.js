import mongoose from 'mongoose'

const ownerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    identification: {
      trype: String,
      required: true,
    },
    carRegNo: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Owner = mongoose.model('Owner', ownerSchema)

export default Owner
