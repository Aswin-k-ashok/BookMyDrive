import express from 'express'
import {
  adminLogin,
  blockUser,
  ownerPrivilegeRemove,
  ownerVerification,
  registerAdmin,
  unBlockUser,
} from '../controller/adminController.js'

const router = express.Router()

router.route('/register').post(registerAdmin)
router.route('/login').post(adminLogin)
router.route('/owner').post(ownerVerification).put(ownerPrivilegeRemove)
router.route('/block').post(blockUser)
router.route('/unblock').post(unBlockUser)

export default router
