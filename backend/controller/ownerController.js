import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc register an owner
// @route GET/api/owner
// @access public

const register = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email, password, licence } = req.body
  let owner = await User.findOne({ email })
  if (owner && (await owner.matchPassword(password))) {
    owner.requestStatus = true // user is requesting owner for the owner previlages so that he can have all the owner functionality
    owner = await owner.save()
    res.json(owner)
  } else {
    res.status(405)
    throw new Error('registration rejected')
  }
})

export { register }
