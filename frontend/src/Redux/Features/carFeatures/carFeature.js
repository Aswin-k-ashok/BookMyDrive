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

export const createCar = createAsyncThunk('car/create', async (values) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(token)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let response = await axios.post('/api/cars', {}, config)
  console.log(response)
  return response.data
})

export const carUpload = createAsyncThunk('car/upload', async (values) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(values)
  const formData = values.formData
  const id = values.carId
  console.log(id)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let response = await axios.put(`/api/cars/${id}`, formData, config)
  console.log(response)
  return response.data
})

export const carPhotoUploadAction = createAsyncThunk(
  'car/photo/upload',
  async ({ imagelink, carId }, { getState }) => {
    const { token } = getState().logedInUser.user
    console.log(imagelink, carId, token)
    let response = await axios.put(`/api/cars/photo1/${carId}`, { imagelink })
    return response.data
  }
)

export const carDeleteActon = createAsyncThunk('car/delete', async (id) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  const config = {
    headers: {
      'Content-Type': 'applicaton/json',
      Authorization: `Bearer ${token}`,
    },
  }

  let response = await axios.delete(`/api/cars/${id}`, config)
  return response.data
})

const carSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    carStateReset: (state) => {
      state.loading = false
      state.carData = {}
      state.error = null
    },
  },
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
      .addCase(createCar.pending, (state) => {
        state.loading = true
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.loading = false
        state.carData = action.payload
      })
      .addCase(createCar.rejected, (state) => {
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
export const { carStateReset } = carSlice.actions
export default carSlice.reducer
