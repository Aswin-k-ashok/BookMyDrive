import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc fetch all users
// @route GET/api/users
// @access public

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({})
  res.json(user)
})

// @desc Auth user & get token
// @route POST /api/users/login
// @access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    // matchPassword is from userModel, used to decrypt the password
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      isBlocked: user.isBlocked,
      isOwner: user.isOwner,
      email: user.email,
      profilePic: user.profilePic,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('invalid email / password')
  }
})

//@desc admin login
//@ reouter POST /api/admin/login
//@access private
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  ;(async () => {
    if (
      req.body.email === 'admin@bookmydrive.com' &&
      req.body.password == process.env.ADMINPASS
    ) {
      res.json({
        message: 'loggd in as admin',
        token: generateToken(req.body.email),
      })
    } else {
      res.status(401)
      throw new Error('invalid email / password')
    }
  })()
})

//@desc Get user profile
//@route GET /api/users/profile
//@access private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      isBlocked: user.isBlocked,
      isOwner: user.isOwner,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//@ desc register a new user
//@ router POST /api/users
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body

  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error('already have an account')
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('invalid credentials')
  }
})

// @desc update user profile
// @route PUT/api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email
    user.phone = req.body.phone || user.phone
    console.log(user.password)

    let pass = user && (await user.matchPassword(req.body.password))

    console.log(pass)

    if (user && (await user.matchPassword(req.body.password))) {
      const updateUser = await user.save()
      res.json({
        _id: updateUser._id,
        firstName: updateUser.firstName,
        lastName: updateUser.lastName,
        email: updateUser.email,
        phone: updateUser.phone,
        token: generateToken(updateUser._id),
        message: 'profile updated successfully',
      })
    } else {
      res.status(404)
      throw new Error('password dont match')
    }
  } else {
    res.status(404)
    throw new Error('user not found')
  }
})

export {
  getUsers,
  authUser,
  getUserProfile,
  registerUser,
  adminLogin,
  updateUserProfile,
}
