import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Owner from '../models/ownerModel.js'

// @desc register an owner
// @route post/api/owner/register
// @access public

const register = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email, password, licence, regNo, phone } = req.body
  const id = req.params.id
  let user = await User.findById(id)
  if (user && (await user.matchPassword(password))) {
    user.requestStatus = true // user is requesting admin for the owner previlages.
    user = await user.save()

    const owner = await Owner.create({
      user: id,
      email: email,
      identification: licence,
      carRegNo: regNo,
      phoneNo: phone,
    })
    res.json({ user: user, owner: owner })
  } else {
    res.status(405)
    throw new Error('wrong password')
  }
})

// @desc get all the owner users
// @route Get/api/owner
// @access private admin

const getAllOwners = asyncHandler(async (req, res) => {
  const owners = await Owner.find()
  if (owners) {
    res.json(owners)
  } else {
    res.status(405)
    throw new Error('no owners are registed')
  }
})

// @desc get owner details
// @desc Get/api/owner
// @access private admin

const getOwner = asyncHandler(async (req, res) => {
  const owner = await Owner.findById(req.params.id).populate('user')
  if (owner) {
    res.json(owner)
  } else {
    res.status(400)
    throw new Error('no owner found')
  }
})

export { register, getOwner, getAllOwners }
