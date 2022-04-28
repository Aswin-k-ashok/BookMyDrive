import asyncHandler from 'express-async-handler'
import Rent from '../models/rentModel.js'

const newRent = asyncHandler(async (req, res) => {
  const { user, car, bookedTimeSlots, totalAmount, totalHours, transactionId } =
    req.body
  try {
    const rent = await Rent.create({
      user,
      car,
      bookedTimeSlots,
      totalHours,
      totalAmount,
      transactionId,
    })
    if (rent) {
      res.status(200).json(rent)
    }
    res.send('Booked your drive')
  } catch (error) {
    return res.status(400).json(error)
  }
})

export { newRent }
