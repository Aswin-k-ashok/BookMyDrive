import express from 'express'
import { addLocation } from '../controller/locationController.js'

const router = express.Router()

router.route('/').post(addLocation)

export default router
