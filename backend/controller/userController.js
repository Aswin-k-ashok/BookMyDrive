import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc fetch all users
// @route GET/api/users
// @access public

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({})
  res.json(user)
})

export { getUsers }
