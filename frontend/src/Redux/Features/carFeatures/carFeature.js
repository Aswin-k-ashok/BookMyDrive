import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  carData: {},
  error: null,
}

export const getCarData = createAsyncThunk('car/getdata/:id', async (id) => {
  console.log(id)
  let response = await axios.get(`/api/cars/${id}`)
  return response.data
})

export const carUpload = createAsyncThunk('car/upload', async () => {
  const { token, _id: id } = JSON.parse(localStorage.getItem('user'))
  console.log(token, id)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let response = await axios.post('/api/cars', config)
  console.log(response)
  return response.data
})

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

      .addCase(getCarData.pending, (state) => {
        state.loading = true
      })
      .addCase(getCarData.fulfilled, (state, action) => {
        state.loading = false
        state.carData = action.payload
      })
      .addCase(getCarData.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
      .addCase(carUpload.pending, (state) => {
        state.loading = true
      })
      .addCase(carUpload.fulfilled, (state, action) => {
        state.loading = false
        state.carData = action.payload
      })
      .addCase(carUpload.rejected, (state) => {
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
