import express from 'express'
import {
  adminLogin,
  blockUser,
  ownerPrivilegeRemove,
  ownerVerification,
  registerAdmin,
  unBlockUser,
  getOwnerRequest,
} from '../controller/adminController.js'
import { protect } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.route('/register').post(registerAdmin)
router.route('/login').post(adminLogin)
router
  .route('/owner')
  .post(ownerVerification)
  .put(ownerPrivilegeRemove)
  .get(getOwnerRequest)
router.route('/block').post(blockUser)
router.route('/unblock').post(unBlockUser)

export default router
