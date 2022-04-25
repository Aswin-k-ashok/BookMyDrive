import mongoose from 'mongoose'

const rentSchema = mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Car',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bookedTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
  },
  { timestamps: true }
)

const Rent = mongoose.model('Rent', rentSchema)

export default Rent
