import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  admin: localStorage.getItem('admin')
    ? JSON.parse(localStorage.getItem('admin'))
    : null,
  error: null,
}

export const adminLogin = createAsyncThunk('admin/login', async (values) => {
  let response = await axios.post('/api/admin/login', values)
  return response.data
})

export const adminLogout = () => {
  localStorage.removeItem('admin')
  adminStateReset()
}

const adminLoginSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    adminStateReset: (state) => {
      state.loading = initialState.loading
      state.admin = initialState.admin
      state.error = initialState.error
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false
        state.admin = action.payload

        localStorage.setItem('admin', JSON.stringify(state.admin))
      })
      .addCase(adminLogin.rejected, (state) => {
        state.loading = false
        state.error = 'invalid UserName / password'
      })
  },
})

export const { adminStateReset } = adminLoginSlice.actions

export default adminLoginSlice.reducer
