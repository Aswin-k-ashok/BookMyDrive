import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const logedInUserState = {
  loading: false,
  user: {},
  error: null,
}

export const logedInUser = createAsyncThunk('users/login', async () => {
  let response = await axios.post('/api/users/login')
  return response.data
})

const logedInUserSlice = createSlice({
  name: 'logedInUser',
  initialState: logedInUserState,
  extraReducers: (builder) => {
    builder
      .addCase(logedInUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(logedInUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(logedInUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'ERRoR'
      })
    localStorage.setItem('logedInUser', JSON.stringify({ logedInUserState }))
  },
})

export default logedInUserSlice.reducer
