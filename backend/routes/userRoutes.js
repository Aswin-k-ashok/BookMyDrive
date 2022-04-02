import express from 'express'
import {
  getUsers,
  authUser,
  getUserProfile,
  registerUser,
  adminLogin,
} from '../controller/userController.js'
import { protect } from '../middlewares/authMiddlewares.js'
const router = express.Router()

router.route('/').get(getUsers).post(registerUser)
router.route('/login').post(authUser)
router.route('/admin/login').post(adminLogin)
router.route('/profile').get(protect, getUserProfile)
export default router
