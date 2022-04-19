import mongoose from 'mongoose'
import Car from './carModel'

const rentSchema = mongoose.Schema(
  {
    tripStartDate: {
      type: Date,
      required: true,
    },
    tripEndDate: {
      type: Date,
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    fineAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    rentAmount: {
      type: Number,
      required: true,
    },
    fuelPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
    },
    cancelationStatus: {
      type: Boolean,
    },
    onRentStatus: {
      type: Boolean,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: Car,
    },
  },
  {
    timestamps: true,
  }
)

const Rent = mongoose.model('Rent', rentSchema)

export default Rent
