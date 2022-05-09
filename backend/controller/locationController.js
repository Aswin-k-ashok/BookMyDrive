import asyncHandler from 'express-async-handler'
import Location from '../models/locationModel.js'

//@desc add a new location
//@route POST/api/location
//@access private

const addLocation = asyncHandler(async (req, res) => {
  const location = new Location({
    state: req.body.state,
    city: req.body.city,
  })
  const newLocation = await location.save()
  res.status(201).json(newLocation)
})

export { addLocation }
