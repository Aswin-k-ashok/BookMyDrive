import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  userCar: [],
  error: null,
}

export const userCarList = createAsyncThunk('car/usercar', async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user._id)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Baarer ${user.token}`,
    },
  }
  let response = await axios.get(`/api/cars/userCars/${user._id}`, config)
  return response.data
})

const userCarSlice = createSlice({
  name: 'usercars',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(userCarList.pending, (state) => {
        state.loading = true
      })
      .addCase(userCarList.fulfilled, (state, action) => {
        state.loading = false
        state.userCar = action.payload
      })
      .addCase(userCarList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default userCarSlice.reducer
