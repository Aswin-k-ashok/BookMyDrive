import express from 'express'
import { registerAdmin, adminLogin } from '../controller/adminController.js'

import { protect } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.route('/register').post(registerAdmin)
router.route('/login').post(adminLogin)

export default router
