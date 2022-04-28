import express from 'express'
import { newRent } from '../controller/rentController.js'

const router = express.Router()

router.route('/').post(newRent)

export default router
