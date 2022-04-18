import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Car from '../../../helpers/cardata'
import axios from 'axios'
import { carUpload } from '../../../Redux/Features/carFeatures/uploadCarFeature'

// const Car = {
//     method: 'GET',
//     url: 'https://car-data.p.rapidapi.com/cars',
//     params: { limit: '20' },
//     headers: {
//         'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
//         'X-RapidAPI-Key': '920b90c12emshf9514894a42fba7p1cf6dbjsn485cb5781996'
//     }
// };

const driveType = [2, 4]
const carSeat = [2, 4, 5, 7, 9]
const fuelType = ['petrol', 'diesel']
const noOfDoors = [2, 4]

function CarUpload() {
  const dispatch = useDispatch()

  let carDetails = useSelector((state) => {
    return state['carDetails']
  })

  let { loading, carData, error } = carDetails

  const [car, setCar] = useState([])

  const [brand, setBrand] = useState([])
  const [cartype, setCartype] = useState('')
  const [carmodel, setCarmodel] = useState([])

  let selectedBrands = []
  let selectedCars = []

  axios
    .request(Car)
    .then(function (response) {
      setCar(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })

  useEffect(() => {}, [])

  const typeHandler = (event) => {
    setCartype(event.target.value)
    selectedBrands = car.filter((x) => x.type == cartype).map((x) => x.make)
    setBrand(selectedBrands)
  }

  const brandHandler = (event) => {
    console.log(event.target.value)
    selectedCars = car.filter((x) => x.make == brand)
    console.log(selectedCars)
    setCarmodel(selectedCars)
  }

  const submitHandler = (event) => {
    dispatch(carUpload([]))
  }

  const handleChange = () => {
    console.log('hello')
  }

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      onSubmit={submitHandler}
    >
      <div>
        <TextField
          id='outlined-select-brands'
          select
          label='TYPE'
          value={car.type}
          onChange={typeHandler}
          helperText='Please select car type'
        >
          {car.map((option) => (
            <MenuItem key={option.id} value={option.type}>
              {option.type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id='outlined-select-brands'
          select
          label='BRANDS'
          value={car.make}
          onChange={brandHandler}
          helperText='Please select your brands'
        >
          {brand.map((option) => (
            <MenuItem value={option}>
              {console.log(option)}
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id='outlined-select-brands'
          select
          label='MODEL'
          value={carmodel}
          onChange={handleChange}
          helperText='Please select the model'
        >
          {carmodel.map((option) => (
            <MenuItem key={option.id} value={carmodel}>
              {console.log(option.model)}
              {option.model}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id='outlined-basic'
          label='REG NO'
          value={carmodel}
          onChange={handleChange}
          helperText='Enter the registation number of your vehicle'
        ></TextField>

        <TextField
          id='outlined-select-brands'
          select
          label='2Wd/4Wd'
          value={carmodel}
          onChange={handleChange}
          helperText='what is your cars drive mode'
        ></TextField>
        <TextField
          id='outlined-select-brands'
          select
          label='SEATING CAPACITY'
          value={carmodel}
          onChange={handleChange}
          helperText='seating capacity of your car'
        ></TextField>
        <TextField
          id='outlined-select-brands'
          select
          label='FUEL TYPE'
          value={carmodel}
          onChange={handleChange}
          helperText='petrol or diesel'
        ></TextField>
        <TextField
          id='outlined-basic'
          label='MAKE YEAR'
          value={carmodel}
          onChange={handleChange}
          helperText='make year as per RC'
        ></TextField>
        <TextField
          id='outlined-select-brands'
          select
          label='DOORS'
          value={carmodel}
          onChange={handleChange}
          helperText='Door count'
        ></TextField>
        <TextField
          id='outlined-select-brands'
          select
          label='MODEL'
          value={carmodel}
          onChange={handleChange}
          helperText='Please select the model'
        ></TextField>
        <TextField
          id='outlined-basic'
          label='COLOR'
          value={carmodel}
          onChange={handleChange}
          helperText='Vehicle color'
        ></TextField>
        <TextField
          id='outlined-select-brands'
          select
          label='CITY'
          value={carmodel}
          onChange={handleChange}
          helperText='Select the city'
        ></TextField>

        <TextField
          id='outlined-basic'
          label='RENT/DAY'
          value={carmodel}
          onChange={handleChange}
          helperText='Car rent'
        ></TextField>

        <TextField
          id='outlined-multiline-static'
          label='Multiline'
          multiline
          rows={4}
          defaultValue='Default Value'
        />

        <input
          type='file'
          onChange={() => {
            console.log('image upload')
          }}
        />
        <button onClick={console.log('click me')}>upload image</button>

        <button type='submit'>upload</button>
      </div>
    </Box>
  )
}

export default CarUpload
