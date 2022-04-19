import express from 'express'
import {
  adminLogin,
  ownerPrivilegeRemove,
  ownerVerification,
  registerAdmin,
} from '../controller/adminController.js'

const router = express.Router()

router.route('/register').post(registerAdmin)
router.route('/login').post(adminLogin)
router.route('/owner').get(ownerVerification).put(ownerPrivilegeRemove)

export default router
