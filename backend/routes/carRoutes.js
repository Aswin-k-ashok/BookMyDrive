import express from 'express'
import {
  addCar,
  deleteCarById,
  getAllCars,
  getCarById,
  getUserCars,
  updateCar,
  updateCarPhoto,
} from '../controller/carController.js'
import { protect } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.route('/').post(protect, addCar).get(getAllCars)
router
  .route('/:id')
  .put(protect, updateCar)
  .get(getCarById)
  .delete(protect, deleteCarById)

router.route('/photo1/:id').put(updateCarPhoto)

router.route('/usercars/:id').get(getUserCars)

export default router
