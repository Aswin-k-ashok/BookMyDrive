import asyncHandler from 'express-async-handler'
import { v4 } from 'uuid'
import Car from '../models/carModel.js'

// @desc add a new car
// @route POST/api/cars
// @access private
const addCar = asyncHandler(async (req, res) => {
  const car = new Car({
    user: req.user._id,
    make: 'Brand',
    carType: 'Car_Type',
    carModel: 'Model_name',
    regNo: 'Register_no' + v4(),
    driveType: 'drive type',
    noOfSeats: 0,
    color: 'color',
    fuel: 'fuel_type',
    noOfDoors: 0,
    makeYear: 0,
    city: 'city',
    rent: 0,
    description: 'Description',
    image1: 'sample url',
    image2: 'sample url',
    image3: 'sample url',
    image4: 'sample url',
  })
  const addedCar = await car.save()
  res.status(201).json(addedCar)
})

// @desc getAllCars
// @route get/api/cars
// @access public

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({})
  res.json(cars)
})

// @desc get a Car
// @route get/api/cars/:id
// @access public
const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)
  if (car) {
    res.json(car)
  } else {
    res.status(404)
    throw new Error('car not found')
  }
})

// @desc update car
// @route PUT/api/cars/:id
// @access private
const updateCar = asyncHandler(async (req, res) => {
  const {
    make,
    carType,
    carModel,
    regNo,
    driveType,
    noOfSeats,
    color,
    fuel,
    noOfDoors,
    makeYear,
    city,
    rent,
    description,
  } = req.body

  const car = await Car.findById(req.params.id)

  if (car) {
    car.make = make
    car.carType = carType
    car.carModel = carModel
    car.regNo = regNo
    car.driveType = driveType
    car.noOfSeats = noOfSeats
    car.color = color
    car.fuel = fuel
    car.noOfDoors = noOfDoors
    car.makeYear = makeYear
    car.city = city
    car.rent = rent
    car.description = description
    car.image1 = image1
    car.image2 = image2
    car.image3 = image3
    car.image4 = image4

    const updatedCar = await car.save()
    res.json(updatedCar)
  } else {
    res.status(404)
    throw new Error('car not found')
  }
})

// @desc update car photo
// @route PUT/api/cars/photo1/:id
// @router private owner

const updateCarPhoto = asyncHandler(async (req, res) => {
  const { imagelink } = req.body
  console.log(imagelink)
  const car = await Car.findById(req.params.id)
  if (car) {
    car.image1 = imagelink
    await car.save()
    res.json(car)
  }
})

// @delete a car
// @route delete/api/cars/:id
// @access private
const deleteCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)
  if (car) {
    await car.remove()
    res.json({ message: 'car and car data removed' })
  } else {
    res.status(404)
    throw new Error('car not found / not removed')
  }
})

// @get user cars
// @router get/api/usercars/:id
// @access private
const getUserCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({ user: req.params.id })
  if (cars) {
    res.json(cars)
  } else {
    res.status(404)
    throw new Error('no cars found')
  }
})

export {
  addCar,
  updateCar,
  getCarById,
  getAllCars,
  deleteCarById,
  updateCarPhoto,
  getUserCars,
}
