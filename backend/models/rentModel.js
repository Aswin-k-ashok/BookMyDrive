import mongoose from 'mongoose'

const rentSchema = mongoose.Schema({
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
  paymentMethod: {
    type: String,
    required: true,
  },
  rentAmount: {},
  discount: {
    type: Number,
  },
  total: {
    type: Number,
  },
  cancelationStatus: {
    type: Boolean,
  },
  tripCompletionStatus: {
    type: Boolean,
  },
  user: {},
  car: {},
})
