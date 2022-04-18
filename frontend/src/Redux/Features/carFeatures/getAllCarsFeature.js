import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userLogin } from '../userFeatures/userLoginFeatures'

const initialState = {
  loading: false,
  cars: [],
  error: null,
}
console.log(initialState)

export const getAllCars = createAsyncThunk('/cars', async () => {
  let response = await axios.get('/api/cars')
  return response.data
})

const allCarsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false
        state.getAllCars.cars = action.payload
        console.log(state.cars)
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default allCarsSlice.reducer
