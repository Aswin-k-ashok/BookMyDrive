import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//@ desc admin register
//@ router POST/api/admin/login
//@access private

const registerAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)

  const adminExist = await Admin.findOne({ email })
  if (adminExist) {
    res.status(400)
    throw new Error('forgot your password')
  }

  const admin = await Admin.create({
    email,
    password,
  })
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      message: 'admin registered successfully',
      token: generateToken(admin._id),
    })
  } else {
    res.status(400)
    throw new Error('invalid credentials')
  }
})

//@ desc admin login
//@ router POST/api/admin/login/register
//@ access private admin

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(email)
  const admin = await Admin.findOne({ email })
  console.log(admin)
  if (admin && (await admin.matchPassword(password))) {
    console.log(admin.email)
    res.json({
      email: admin.email,
      token: generateToken(admin._id),
    })
  } else {
    res.status(401)
    throw new Error('invalid email/ password')
  }
})

//@ desc owner request list
//@ route get/api/amin/owner
//@ access private admin

const getOwnerRequest = asyncHandler(async (req, res) => {
  const ownerUser = await User.find({ requestStatus: true })
  res.json(ownerUser)
})

//@ desc owner request verification
//@ router POST/api/admin/owner
//@ access private admin

const ownerVerification = asyncHandler(async (req, res) => {
  const { email } = req.body
  const owner = await User.findOne({ email })
  if (owner) {
    owner.isOwner = true
    res.json({
      owner: owner,
      message: 'this person is now a owner',
    })
  } else {
    res.status(401)
    throw new Error('something went wrong')
  }
})

//@ desc owner previlate removal
//@ router PUT/api/admin/owner
//@ access private admin

const ownerPrivilegeRemove = asyncHandler(async (req, res) => {
  const { email } = req.body
  const owner = await User.findOne({ email })
  if (owner) {
    owner.isOwner = false
    res.json({
      owner: owner,
      message: 'this persons owner previlages removed',
    })
  } else {
    res.status(401)
    throw new Error('requested person is not an owner / somthing went wrong')
  }
})

//@ desc user block
//@ desc post/api/admin/block
//@ access private admin

const blockUser = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { id } = req.body
  const user = await User.findById(id)
  if (user.isBlocked) {
    //true
    res.json({
      user: user,
      message: 'user is already blocked',
    })
    return
  }
  user.isBlocked = true
  res.json({
    message: 'user blocked',
    user: user,
  })
})

//@ desc unblock user
//@ route /api/admin/unblock
//@ access private admin

const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.body
  const user = await User.findById(id)
  if (!user.isBlocked) {
    res.json({
      user: user,
      message: 'Block the user first',
    })
    return
  }
  user.isBlocked = false
  res.json({
    message: 'user unblocked',
    user: user,
  })
})

export {
  registerAdmin,
  adminLogin,
  getOwnerRequest,
  ownerVerification,
  ownerPrivilegeRemove,
  blockUser,
  unBlockUser,
}
