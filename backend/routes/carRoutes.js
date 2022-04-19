import express from 'express'
import {
  addCar,
  deleteCarById,
  getAllCars,
  getCarById,
  updateCar,
} from '../controller/carController.js'
import { protect } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.route('/').post(protect, addCar).get(getAllCars)
router
  .route('/:id')
  .put(protect, updateCar)
  .get(getCarById)
  .delete(protect, deleteCarById)

export default router
