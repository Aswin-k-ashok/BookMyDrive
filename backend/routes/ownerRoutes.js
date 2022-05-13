import express from 'express'
import {
  register,
  getOwner,
  getAllOwners,
} from '../controller/ownerController.js'

const router = express.Router()
router.route('/:id').get(getOwner)
router.route('/register/:id').post(register)
router.route('/').get(getAllOwners)

export default router
