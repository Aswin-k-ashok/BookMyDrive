import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  carData: {},
  error: null,
}

export const carUploadAction = createAsyncThunk(
  'car/upload',
  console.log('going to upload'),
  async (values) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }
    let response = await axios.post('/api/cars', values, config)
    console.log(values, config, 'from upload car feature')
    return response.data
  }
)

export const carPhotoUploadAction = createAsyncThunk(
  'car/photo/upload',
  async (link, carId, { dispatch, getState }) => {
    const { token } = getState().login.user

    const config = {
      headers: {
        'Content-Type': 'applicaton/json',
        Authorization: `Bearer ${token}`,
      },
    }
    let response = await axios.put(`/api/cars/photo1/${carId}`, link, config)
    console.log(link, config, ' car photo upload action called')
    return response.data
  }
)

const carSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(carUploadAction.pending, (state) => {
        state.loading = true
      })
      .addCase(carUploadAction.fulfilled, (state, action) => {
        state.loading = false
        state.carData = action.payload
      })
      .addCase(carUploadAction.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
      .addCase(carPhotoUploadAction.pending, (state) => {
        state.loading = true
      })
      .addCase(carPhotoUploadAction.fulfilled, (state, action) => {
        state.loading = false
        state.carData = action.payload
      })
      .addCase(carPhotoUploadAction.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default carSlice.reducer
