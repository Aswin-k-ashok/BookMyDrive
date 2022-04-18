import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'
import { v4 } from 'uuid'

// @desc add a new car
// @route POST/api/car
// @access private
const addCar = asyncHandler(async (req, res) => {
  const car = new Car({
    user: req.user._id,
    make: 'sample make',
    carType: 'sample type',
    carModel: 'sample model',
    regNo: 'sample reg no' + v4(),
    driveType: 'sample drive type',
    noOfSeats: 0,
    color: 'sample color',
    fuel: 'sample fuel',
    noOfDoors: 0,
    makeYear: 0,
    city: 'sample city',
    rent: 0,
    description: 'sample desc',
    image1: 'sample url',
    image2: 'sample url',
    image3: 'sample url',
    image4: 'sample url',
  })
  const addedCar = await car.save()
  res.status(201).json(addedCar)
})

// @desc update car
// @route PUT/api/car/:id
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
    image1,
    image2,
    image3,
    image4,
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

// @desc get a Car
// @route get/api/car/:id
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

// @desc getAllCars
// @route get/api/car
// @access public

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({})
  res.json(cars)
})

// @delete a car
// @route delete/api/car/:id
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

export { addCar, updateCar, getCarById, getAllCars, deleteCarById }
