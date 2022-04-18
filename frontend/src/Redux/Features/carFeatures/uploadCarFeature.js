import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  carData: {},
  error: null,
}

export const carUploadAction = createAsyncThunk(
  'car/upload',
  async (values, { dispatch, getState }) => {
    const { token } = getState().login.user

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    let response = await axios.post('/api/cars', values, config)
    console.log(values, config, 'from upload car feature')
    return response.data
  }
)

const carUploadSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(carUploadAction.pending, (state, action) => {
        state.loading = true
      })
      .addCase(carUploadAction.fulfilled, (state, action) => {
        state.loading = false
        //state.carData = action.payload
      })
      .addCase(carUploadAction.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default carUploadSlice.reducer
