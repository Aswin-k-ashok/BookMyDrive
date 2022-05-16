import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { userLogin } from '../userFeatures/userLoginFeatures'

const initialState = {
  loading: false,
  cars: [],
  error: null,
}

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
        state.cars = action.payload
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default allCarsSlice.reducer
