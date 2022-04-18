import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const carSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    make: {
      type: String,
      required: true,
    },
    carType: {
      type: String,
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    regNo: {
      type: String,
      unique: true,
      required: true,
    },
    driveType: {
      type: String,
      required: true,
    },
    noOfSeats: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    noOfDoors: {
      type: Number,
    },

    makeYear: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model('Car', carSchema)

export default Car
