import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

export const userUpdate = createAsyncThunk(
  'user/update',
  async (values, getState) => {
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user.token)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    let response = await axios.put('/api/users/profile', values, config)
    return response.data
  }
)

const userUpdateSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userUpdate.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload

        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default userUpdateSlice.reducer
