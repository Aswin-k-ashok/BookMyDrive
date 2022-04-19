import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

export const adminLogin = createAsyncThunk('admin/login', async (values) => {
  let email = values.email
  let response = await axios.post('/api/users/admin/login', { email })
  return response.data
})

const adminLoginSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state, action) => {
        state.loading = true
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false
        state.admin = action.payload

        localStorage.setItem('admin', JSON.stringify(state.admin))
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export const adminLogout = () => {
  localStorage.removeItem('admin')
}

export default adminLoginSlice.reducer
