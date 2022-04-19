import express from 'express'
import { register } from '../controller/ownerController.js'

const router = express.Router()

router.route('/register').post(register)

export default router
