import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
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

export { registerAdmin, adminLogin }
