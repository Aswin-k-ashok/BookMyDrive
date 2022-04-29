import express from 'express'
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
  updateUserProfilePicture,
} from '../controller/userController.js'
import { protect } from '../middlewares/authMiddlewares.js'
const router = express.Router()

router.route('/').get(getUsers).post(registerUser)
router.route('/login').post(authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/profilepic').post(protect, updateUserProfilePicture)

export default router
